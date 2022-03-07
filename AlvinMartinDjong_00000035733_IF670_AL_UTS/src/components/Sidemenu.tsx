import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenu, 
  IonMenuToggle, 
  IonTitle, 
  IonToggle, 
  IonToolbar 
} from '@ionic/react'
import React from 'react'

const Sidemenu: React.FC = () => {
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
            <IonItem button routerLink='/home'>
              <IonLabel>Daftar Calon Pasangan</IonLabel>
            </IonItem>
            <IonItem button routerLink='/target'>
              <IonLabel>Target Pasangan</IonLabel>
            </IonItem>
            <IonItem button routerLink='/profile'>
              <IonLabel>Profile</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonItem>
            <IonLabel>Welcome to Dark Theme</IonLabel>
            <IonToggle onIonChange={toggleDarkMode} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Sidemenu