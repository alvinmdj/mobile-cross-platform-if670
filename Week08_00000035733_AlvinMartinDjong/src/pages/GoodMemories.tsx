import { isPlatform } from '@ionic/core'
import { IonApp, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { addOutline } from 'ionicons/icons'
import React from 'react'

const GoodMemories: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          {!isPlatform('android') && (
            <IonButtons slot='end'>
              <IonButton routerLink='/tabs/new'>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
          <IonTitle>Good Memories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2>Good Memories</h2>
        {isPlatform('android') && (
          <IonFab horizontal='end' vertical='bottom' slot='fixed'>
            <IonFabButton color='primary' routerLink='/tabs/new'>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonApp>
  )
}

export default GoodMemories