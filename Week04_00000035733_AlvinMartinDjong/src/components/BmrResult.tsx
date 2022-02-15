import { 
  IonCard,
  IonCardContent,
  IonCol, 
  IonRow 
} from '@ionic/react';
import React from 'react';

const BmrResult: React.FC<{ calculatedBMR: number }> = ({ calculatedBMR }) => {
  const sedentary = calculatedBMR * 1.2;
  const light = calculatedBMR * 1.375;
  const moderate = calculatedBMR * 1.55;
  const veryActive = calculatedBMR * 1.725;
  const extraActive = calculatedBMR * 1.9;

  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <div className='ion-text-center'>
              <h2>BMR = {calculatedBMR.toFixed(2)} Calories/day</h2>
              <p>Daily calorie needs based on activity level</p>
            </div>
            <IonRow>
              <IonCol size='8'>
                <strong>Activity Level</strong>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <strong>Calorie</strong>
              </IonCol>
              <IonCol size='8'>
                <span>Sedentary: little or no exercise</span>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <span>{sedentary.toFixed(2)}</span>
              </IonCol>
              <IonCol size='8'>
                <span>Exercise 1-3 times/week</span>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <span>{light.toFixed(2)}</span>
              </IonCol>
              <IonCol size='8'>
                <span>Exercise 4-5 times/week</span>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <span>{moderate.toFixed(2)}</span>
              </IonCol>
              <IonCol size='8'>
                <span>Daily exercise or intense exercise 3-4 times/week</span>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <span>{veryActive.toFixed(2)}</span>
              </IonCol>
              <IonCol size='8'>
                <span>Intense exercise 6-7 times/week</span>
              </IonCol>
              <IonCol size='4' className='ion-text-end'>
                <span>{extraActive.toFixed(2)}</span>
              </IonCol>
            </IonRow>
          </IonCardContent>
          {/* <IonCardContent>
            <IonRow>
              <IonCol size='9'>
                <strong>Activity Level</strong>
                <p>Sedentary: little or no exercise</p>
                <p>Exercise 1-3 times/week</p>
                <p>Exercise 4-5 times/week</p>
                <p>Daily exercise or intense exercise 3-4 times/week</p>
                <p>Intense exercise 6-7 times/week</p>
              </IonCol>
              <IonCol size='3' className='ion-text-end'>
                <strong>Calorie</strong>
                <p>{sedentary.toFixed(2)}</p>
                <p>{light.toFixed(2)}</p>
                <p>{moderate.toFixed(2)}</p>
                <p>{veryActive.toFixed(2)}</p>
                <p>{extraActive.toFixed(2)}</p>
              </IonCol>
            </IonRow>
          </IonCardContent> */}
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmrResult;
