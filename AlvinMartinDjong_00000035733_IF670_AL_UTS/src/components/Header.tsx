import { 
  IonButton,
  IonButtons,
  IonHeader, 
  IonIcon, 
  IonMenuButton, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import React from 'react'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonMenuButton menu='sidemenu' />
        </IonButtons>
        <IonButtons slot='end'>
          <IonButton shape='round' routerLink='/profile'>
            <IonIcon icon={personCircleOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle>{ title }</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header