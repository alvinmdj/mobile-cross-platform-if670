import { isPlatform } from '@ionic/core';
import {
  IonApp,
  IonButton,
  IonButtons,
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
import React, { useEffect, useState } from 'react';
import MemoryItem from '../components/MemoryItem';

interface Memory {
  id: string,
  title: string;
  type: string;
  photo: string;
}

const GoodMemories: React.FC = () => {
  const URL = 'http://localhost/crossplatform-w10/select_all_good_memory.php';
  const [goodMemories, setGoodMemories] = useState<Array<Memory>>([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.memories);
        setGoodMemories(data.memories);
      });
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='success'>
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
          {!goodMemories && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No good memories found.</h2>
              </IonCol>
            </IonRow>
          )}
          {goodMemories && goodMemories.map(memory => (
            <MemoryItem memory={memory} key={memory.id} />
          ))}
        </IonGrid>
        {isPlatform('android') && (
          <IonFab horizontal='end' vertical='bottom' slot='fixed'>
            <IonFabButton color='success' routerLink='/tabs/new'>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonApp>
  );
};

export default GoodMemories;