import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react'
import React from 'react'

interface Props {
  memory: {
    id: string;
    title: string;
    base64Url: string;
    type: string;
  };
};

const MemoryItem: React.FC<Props> = ({ memory }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <img src={memory.base64Url} alt={memory.title} />
          <IonCardHeader>
            <IonCardTitle>{memory.title}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default MemoryItem