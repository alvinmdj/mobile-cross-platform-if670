import { useRef, useState } from 'react';
import {
  IonAlert,
  IonApp,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';

/* Import components */
import BmiControls from '../components/BmiControls';
import BmiResult from '../components/BmiResult';
import InputControl from '../components/InputControl';

const BmiCalc: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [category, setCategory] = useState<string>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  // set BMI category
  const bmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return "Kurus";
    else if (bmi <= 24.9) return "Normal";
    else if (bmi <= 29.9) return "Gemuk";
    else return "Obesitas";
  }

  // calculate BMI
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    let bmi: number;

    if (!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) height and weight!');
      return;
    }

    if (calcUnits === 'cmkg') {
      // bmi formula for cm/kg
      bmi = +enteredWeight / (+enteredHeight / 100) ** 2;
    } else {
      // bmi formula for ft/lbs
      bmi = +enteredWeight / (+enteredHeight * 12) ** 2 * 703;
    }

    // console.log(bmi);
    setCategory(bmiCategory(bmi));
    setCalculatedBMI(bmi);
  }

  // reset inputs
  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(undefined);
    setCategory(undefined);
  }

  // clear error
  const clearError = () => {
    setError(undefined)
  }

  // handle calculation unit changes
  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    // check if calculation unit changed, update refs value
    if (calcUnits !== selectedValue) {
      let height = heightInputRef.current!.value;
      let weight = weightInputRef.current!.value;

      if (height !== '' && weight !== '') {
        if (selectedValue === 'cmkg') {
          heightInputRef.current!.value = Number(height) / 0.0328084;
          weightInputRef.current!.value = Number(weight) / 2.2046226218488;
        } else {
          heightInputRef.current!.value = Number(height) * 0.0328084;
          weightInputRef.current!.value = Number(weight) * 2.2046226218488;
        }
      }
    }

    // set current calculation unit to selected value
    setCalcUnits(selectedValue);
  }

  return (
    <>
      <IonAlert
        isOpen={!!error}  // '!!' ensures that the value is a boolean
        message={error}
        buttons={ [ { text: 'Okay', handler: clearError } ] }
        onWillDismiss={clearError}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/home' />
            </IonButtons>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>Berat Badan ({calcUnits === 'cmkg' ? 'kg' : 'lbs'})</IonLabel>
                  <IonInput type='number' ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
            {calculatedBMI && <BmiResult calculatedBMI={calculatedBMI} category={category} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default BmiCalc;
