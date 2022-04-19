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
  id: string,
  title: string;
  type: string;
  photo: string;
}

const GoodMemories: React.FC = () => {
  const [goodMemories, setGoodMemories] = useState<Array<Memory>>([]);

  const getMemories = async () => {
    const memoriesRef = collection(db, 'memories');
    const q = query(memoriesRef, where('type', '==', 'good'));

    const querySnapshot = await getDocs(q);
    // console.log('querySnapshot:', querySnapshot);
    setGoodMemories(querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        title: doc.data().title,
        type: doc.data().type,
        photo: doc.data().photoUrl,
      };
    }));

    // querySnapshot.forEach((doc) => {
    //   console.log('doc:', doc.data());
    // });
  }

  useEffect(() => {
    getMemories();
  }, []);

  return (
    <IonApp>
      <Header color='success' title='Good Memories' />
      <IonContent className='ion-padding'>
        <IonGrid>
          {goodMemories.length === 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No good memories found.</h2>
              </IonCol>
            </IonRow>
          )}
          {goodMemories && goodMemories.map(memory => (
            <MemoryItem
              title={memory.title}
              photo={memory.photo}
              key={memory.id}
            />
          ))}
        </IonGrid>
        {isPlatform('android') && <Fab color='success' />}
      </IonContent>
    </IonApp>
  );
};

export default GoodMemories;