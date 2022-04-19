import React, { useRef, useState } from 'react';
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useHistory } from 'react-router';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import './NewMemory.css';
import { db, storage } from '../services/firebase';

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string')
      }
    };
    reader.readAsDataURL(blob);
  });
};

const NewMemory: React.FC = () => {
  const history = useHistory();

  const [disabled, setDisabled] = useState(false);
  const [takenPhoto, setTakenPhoto] = useState<{
    path: string | undefined, // will store original URL
    preview: string, // will store preview URL for web
  }>();
  const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>('good');
  const titleRef = useRef<HTMLIonInputElement>(null);
  
  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    });
    console.log(photo);

    if (!photo || /* !photo.path || */ !photo.webPath) {
      return;
    }

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath,
    });
  };

  const addMemory = async (title: string, photoName: string, photoUrl: string) => {
    try {
      const docRef = await addDoc(collection(db, 'memories'), {
        title,
        type: chosenMemoryType as string,
        photoName,
        photoUrl,
      });
      console.log('doc written with id:', docRef.id);
    } catch (error) {
      console.error('Error adding document:', error);
    } finally {
      chosenMemoryType === 'good' ? history.push('/tabs/good') : history.push('/tabs/bad');
    }
  }

  const addMemoryHandler = async () => {
    setDisabled(true);

    const enteredTitle = titleRef.current?.value;
    if (!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType) {
      console.log(takenPhoto);
      setDisabled(false);
      return;
    }

    const memoryTitle = enteredTitle.toString().trim() as string;
    const photoName =  new Date().getTime() + '.jpeg' as string;
    const photoBlob = await fetch(takenPhoto.preview).then(res => res.blob());

    // store image in firebase storage
    const storageRef = ref(storage, photoName);
    uploadBytes(storageRef, photoBlob).then((snapshot) => {
      console.log('photo uploaded', snapshot);
      getDownloadURL(ref(storage, photoName)).then((photoUrl) => {
        // add memory to firestore
        addMemory(memoryTitle, photoName, photoUrl);
        console.log('photo url:', photoUrl);
      });
    });
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot="start">
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Add New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Memory Title</IonLabel>
              <IonInput type='text' ref={titleRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonSelect onIonChange={selectMemoryTypeHandler} value={chosenMemoryType}>
              <IonSelectOption value='good'>Good Memory</IonSelectOption>
              <IonSelectOption value='bad'>Bad Memory</IonSelectOption>
            </IonSelect>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='ion-text-center'>
            <div className="image-preview">
              {!takenPhoto && <h3>No photo chosen.</h3>}
              {takenPhoto && <img src={takenPhoto.preview} alt='Preview' />}
            </div>
            <IonButton fill='clear' onClick={takePhotoHandler}>
              <IonIcon slot='start' icon={camera} />
              <IonLabel>Take Photo</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className='ion-margin-top'>
          <IonCol className='ion-text-center'>
            <IonButton disabled={disabled} onClick={addMemoryHandler}>Add Memory</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonApp>
  );
};

export default NewMemory;