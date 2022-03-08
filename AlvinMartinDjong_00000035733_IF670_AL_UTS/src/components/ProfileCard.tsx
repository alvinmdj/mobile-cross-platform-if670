import { 
  IonButton,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCol, 
  IonIcon, 
  IonLabel,
  IonRow
} from '@ionic/react'
import { personAddOutline } from 'ionicons/icons'
import React from 'react'

const ProfileCard: React.FC = () => {
  return (
    <IonCard>
      <img src="/assets/profile/picture.webp" alt="Developer" style={{ display: 'block', margin: 'auto' }} />
      <IonCardHeader class='ion-text-center'>
        <IonCardTitle>Alvin Martin Djong</IonCardTitle>
        <IonCardSubtitle>00000035733</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonRow>
          <IonCol>
            <IonButton expand="block" href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>Instagram</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color='secondary' expand="block" href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <IonIcon slot='start' icon={personAddOutline} />
              <IonLabel>Follow</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonCardContent>
    </IonCard>
  )
}

export default ProfileCard