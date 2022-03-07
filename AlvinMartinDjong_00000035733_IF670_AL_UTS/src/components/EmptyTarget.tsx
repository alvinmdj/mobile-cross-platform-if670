import { IonButton, IonCol, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { search } from 'ionicons/icons'
import React from 'react'

const EmptyTarget: React.FC = () => {
  return (
    <IonRow class='ion-text-center'>
      <IonCol size='12'>
        <IonLabel>Anda masih jones ???</IonLabel>
      </IonCol>
      <IonCol size='12'>
        <IonButton expand="block" routerLink='/home'>
          <IonIcon slot='start' icon={search} />
          <IonLabel>Cari Gebetan</IonLabel>
        </IonButton>
      </IonCol>
    </IonRow>
  )
}

export default EmptyTarget