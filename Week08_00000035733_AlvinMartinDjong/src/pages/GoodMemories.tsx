import { isPlatform } from '@ionic/core';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React, { useContext } from 'react';
import MemoriesContext from '../data/memories-context';

const GoodMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);
  const goodMemories = memoriesCtx.memories.filter(memory => memory.type === 'good');

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
        <IonGrid>
          {goodMemories.length === 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No good memories found.</h2>
              </IonCol>
            </IonRow>
          )}
          {goodMemories.map(memory => (
            <IonRow key={memory.id}>
              <IonCol>
                <IonCard>
                  <img src={memory.base64Url} alt={memory.title} />
                  <IonCardHeader>
                    <IonCardTitle>{memory.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
        {isPlatform('android') && (
          <IonFab horizontal='end' vertical='bottom' slot='fixed'>
            <IonFabButton color='primary' routerLink='/tabs/new'>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonApp>
  );
};

export default GoodMemories;