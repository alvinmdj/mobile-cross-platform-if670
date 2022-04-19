import { isPlatform } from '@ionic/core';
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Fab from '../components/Fab';
import Header from '../components/Header';
import MemoryItem from '../components/MemoryItem';
import { db } from '../services/firebase';

interface Memory {
  id: string;
  title: string;
  type: string;
  photo: string;
}

const BadMemories: React.FC = () => {
  const [badMemories, setBadMemories] = useState<Array<Memory>>([]);

  const getMemories = async () => {
    const memoriesRef = collection(db, 'memories');
    const q = query(memoriesRef, where('type', '==', 'bad'));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      console.log(querySnapshot.docs);
      setBadMemories(querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          title: doc.data().title,
          type: doc.data().type,
          photo: doc.data().photoUrl,
        };
      }));
    }

    querySnapshot.forEach((doc) => {
      console.log('doc:', doc.data());
    });
  }

  useEffect(() => {
    getMemories();
  }, []);

  return (
    <IonApp>
      <Header color='danger' title='Bad Memories' />
      <IonContent className='ion-padding'>
        <IonGrid>
          {badMemories.length === 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No bad memories found.</h2>
              </IonCol>
            </IonRow>
          )}
          {badMemories && badMemories.map(memory => (
            <MemoryItem title={memory.title} photo={memory.photo} key={memory.id} />
          ))}
        </IonGrid>
        {isPlatform('android') && <Fab color='danger' />}
      </IonContent>
    </IonApp>
  );
};

export default BadMemories;