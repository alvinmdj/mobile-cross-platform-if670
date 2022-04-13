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
import './NewMemory.css';

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
  const URL = 'http://localhost/crossplatform-w10/insert_new_memory.php';

  const history = useHistory();

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

  const addMemoryHandler = async () => {
    const enteredTitle = titleRef.current?.value;
    if (!enteredTitle || enteredTitle.toString().trim().length === 0 || !takenPhoto || !chosenMemoryType) {
      console.log(takenPhoto);
      return;
    }

    const formData = new FormData();

    const inputTitle = enteredTitle.toString().trim() as string;
    const inputType = chosenMemoryType as string;
    const photoName = new Date().getTime() + '.jpeg' as string;
    const photoBlob = await fetch(takenPhoto.preview).then(r => r.blob());

    formData.append('title', inputTitle);
    formData.append('type', inputType);
    formData.append('photoName', photoName);
    formData.append('photo', photoBlob as File);

    fetch(URL, {
      method: 'POST',
      body: formData,
    }).then((response) => response.text()).then((data) => {
      console.log(data);
    }).finally(() => {
      chosenMemoryType === 'good' ? history.push('/tabs/good') : history.push('/tabs/bad');
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
            <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonApp>
  );
};

export default NewMemory;