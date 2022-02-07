import { 
  IonCard,
  IonCardContent,
  IonCol, 
  IonRow 
} from '@ionic/react';
import React from 'react';

interface Props {
  calculatedBMI: number;
  category: string | undefined;
}

const BmiResult: React.FC<Props> = ({ calculatedBMI, category }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className='ion-text-center'>
            <h2>{calculatedBMI.toFixed(2)}</h2>
          </IonCardContent>
          <IonCardContent className='ion-text-center'>
            <h1>{category}</h1>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
