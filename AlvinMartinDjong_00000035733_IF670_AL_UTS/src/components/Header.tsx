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
          <IonButton class='btn-profile' shape='round' routerLink='/profile'>
            <IonIcon size='large' icon={personCircleOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle>{ title }</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header