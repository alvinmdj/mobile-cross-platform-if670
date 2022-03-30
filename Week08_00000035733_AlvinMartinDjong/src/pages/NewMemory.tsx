import React, { useState } from 'react';
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
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import './NewMemory.css';

const NewMemory: React.FC = () => {
  const [takenPhoto, setTakenPhoto] = useState<{
    path: string, // will store original URL
    preview: string, // will store preview URL for web
  }>();
  
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
        <IonItem>
          <IonLabel position="floating">Memory Title</IonLabel>
          <IonInput></IonInput>
        </IonItem>
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
            <IonButton>Add Memory</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonApp>
  );
};

export default NewMemory;