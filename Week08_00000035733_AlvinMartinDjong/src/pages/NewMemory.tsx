import React, { useContext, useRef, useState } from 'react';
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
import { Directory, Filesystem } from '@capacitor/filesystem';
import './NewMemory.css';
import MemoriesContext from '../data/memories-context';
import { useHistory } from 'react-router';

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
  const memoriesCtx = useContext(MemoriesContext);
  const history = useHistory();

  const [takenPhoto, setTakenPhoto] = useState<{
    path: string, // will store original URL
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

    if (!photo || !photo.path || !photo.webPath) {
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
      return;
    }

    const fileName = new Date().getTime() + '.jpeg';
    const base64 = await base64FromPath(takenPhoto!.preview);
    await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Data,
    });

    memoriesCtx.addMemory(fileName, enteredTitle.toString(), chosenMemoryType);
    history.length > 0 ? history.goBack() : history.replace('/tabs/good');
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
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
            <IonSelect onIonChange={selectMemoryTypeHandler} value='good'>
              <IonSelectOption value='good'>Good Memory</IonSelectOption>
              <IonSelectOption value='bad'>Bad Memory</IonSelectOption>
            </IonSelect>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='ion-text-center'>
            <div className="image-preview">
              {!takenPhoto && <h3>No photo choosen.</h3>}
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