import { IonCard, IonCardHeader, IonCardTitle, IonCol, IonRow } from '@ionic/react'
import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Memory } from '../data/memories-context'

interface Props { memory: Memory };

const MemoryItem: React.FC<Props> = ({ memory }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <img src={memory.base64Url} alt={memory.title} />
          <GoogleMap
            mapContainerStyle={{ width:'100%', height:'200px' }}
            center={{ lat: memory.lat, lng: memory.lng }}
            zoom={18}
          >
            <Marker position={{ lat: memory.lat, lng: memory.lng }} />
          </GoogleMap>
          <IonCardHeader>
            <IonCardTitle>{memory.title}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonCol>
    </IonRow>
  );
}

export default MemoryItem;