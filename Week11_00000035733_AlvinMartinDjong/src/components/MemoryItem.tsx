import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react'
import React from 'react'

interface MemoryItemProps {
  title: string;
  photo: string;
};

const MemoryItem = (props: MemoryItemProps) => {
  const { title, photo } = props;

  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <img src={photo} alt={title} />
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default MemoryItem