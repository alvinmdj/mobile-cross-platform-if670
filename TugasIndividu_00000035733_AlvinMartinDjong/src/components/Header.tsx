import { 
  IonButton,
  IonButtons,
  IonHeader, IonIcon, IonMenuButton, IonToolbar 
} from '@ionic/react'
import { searchOutline } from 'ionicons/icons'
import React from 'react'

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton routerLink='/page/Search' routerDirection='back' >
            Search
            &nbsp;
            <IonIcon icon={searchOutline}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header