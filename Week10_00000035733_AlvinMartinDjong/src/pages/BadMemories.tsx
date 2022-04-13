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

const BadMemories: React.FC = () => {
  const URL = 'http://localhost/crossplatform-w10/select_all_bad_memory.php';
  const [badMemories, setBadMemories] = useState<Array<Memory>>([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        // console.log(data.memories);
        setBadMemories(data.memories);
      });
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color='danger'>
          {!isPlatform('android') && (
            <IonButtons slot='end'>
              <IonButton routerLink='/tabs/new'>
                <IonIcon icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
          <IonTitle>Bad Memories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          {!badMemories && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No bad memories found.</h2>
              </IonCol>
            </IonRow>
          )}
          {badMemories && badMemories.map(memory => (
            <MemoryItem memory={memory} key={memory.id} />
          ))}
        </IonGrid>
        {isPlatform('android') && (
          <IonFab horizontal='end' vertical='bottom' slot='fixed'>
            <IonFabButton color='danger' routerLink='/tabs/new'>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonApp>
  );
};

export default BadMemories;