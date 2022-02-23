import { 
  IonCard,
  IonCardContent,
  IonCol, 
  IonRow 
} from '@ionic/react';
import React from 'react';

import './BmiResult.css';

interface Props {
  calculatedBMI: number;
  category: string | undefined;
  categoryColor: string | undefined;
}

const BmiResult: React.FC<Props> = ({ calculatedBMI, category, categoryColor }) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard color={categoryColor} id='result'>
          <IonCardContent className='ion-text-center'>
            <h2>{calculatedBMI.toFixed(2)}</h2>
            <h1>{category}</h1>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
