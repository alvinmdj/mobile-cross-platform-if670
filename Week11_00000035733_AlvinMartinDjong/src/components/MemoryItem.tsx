import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react'
import React from 'react'

interface Props {
  memory: {
    id: string,
    title: string;
    type: string;
    photo: string;
  };
};

const MemoryItem: React.FC<Props> = ({ memory }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <img src={'http://localhost/crossplatform-w10/' +
            (memory.photo ? memory.photo : 'uploads/dio.png')} alt={memory.title} />
          <IonCardHeader>
            <IonCardTitle>{memory.title}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default MemoryItem