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
      <Header color='success' title='Good Memories' />
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
        {isPlatform('android') && <Fab color='success' />}
      </IonContent>
    </IonApp>
  );
};

export default GoodMemories;