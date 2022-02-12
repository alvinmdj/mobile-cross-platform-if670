import { 
  IonButton,
  IonButtons,
  IonHeader, IonIcon, IonMenuButton, IonToolbar 
} from '@ionic/react'
import { searchOutline } from 'ionicons/icons'
import React from 'react'

import './Header.css'

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="end">
          <IonButton 
            strong
            mode='ios'
            class='search-btn'
            routerLink='/page/Search'
            routerDirection='none'
          >
            Search&nbsp;
            <IonIcon icon={searchOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header