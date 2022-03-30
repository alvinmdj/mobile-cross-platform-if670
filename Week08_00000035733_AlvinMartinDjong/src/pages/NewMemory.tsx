import { IonApp, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { camera } from 'ionicons/icons'
import React from 'react'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import './NewMemory.css'

const NewMemory: React.FC = () => {
  const takePhotoHandler = async () => {
    const image = Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 80,
      width: 500,
    })
    console.log(image);
  }

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
              <h3>No photo choosen.</h3>
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
  )
}

export default NewMemory