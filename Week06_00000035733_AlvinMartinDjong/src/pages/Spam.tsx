import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Spam: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            Spam
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h2>Spam</h2>
      </IonContent>
    </IonPage>
  )
}

export default Spam