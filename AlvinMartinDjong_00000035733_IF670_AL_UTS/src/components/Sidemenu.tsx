import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenu, 
  IonMenuToggle, 
  IonTitle, 
  IonToggle, 
  IonToolbar 
} from '@ionic/react'
import { contrastOutline, listOutline, lockClosedOutline, personOutline } from 'ionicons/icons'
import React from 'react'
import { useLocation } from 'react-router'

import './Sidemenu.css'

const menuList = [
  {
    title: 'Daftar Calon Pasangan',
    url: '/home',
    icon: listOutline
  },
  {
    title: 'Target Pasangan',
    url: '/target',
    icon: lockClosedOutline
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: personOutline
  },
]

const Sidemenu: React.FC = () => {
  const location = useLocation();

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark')
  }
  
  return (
    <IonMenu side="start" contentId='main' menuId="sidemenu">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Gebet App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            {menuList.map((menu, index) => (
              <IonItem 
                button
                lines='none'
                routerLink={menu.url} 
                key={index} 
                className={location.pathname === menu.url ? 'selected' : ''} 
              >
                <IonIcon slot='start' icon={menu.icon} />
                <IonLabel>{menu.title}</IonLabel>
              </IonItem>
            ))}
          </IonMenuToggle>
          <IonItem lines='none'>
            <IonIcon slot='start' icon={contrastOutline} />
            <IonLabel>Toggle Dark Theme</IonLabel>
            <IonToggle onIonChange={toggleDarkMode} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Sidemenu