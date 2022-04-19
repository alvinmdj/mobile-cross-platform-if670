import { isPlatform } from '@ionic/core';
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Fab from '../components/Fab';
import Header from '../components/Header';
import MemoryItem from '../components/MemoryItem';

interface Memory {
  id: string;
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
      <Header color='danger' title='Bad Memories' />
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
        {isPlatform('android') && <Fab color='danger' />}
      </IonContent>
    </IonApp>
  );
};

export default BadMemories;