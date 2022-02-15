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
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';

/* Import components */
import InputControl from '../components/InputControl';
import BmrResult from '../components/BmrResult';
import BmrControls from '../components/BmrControls';

const BmrCalc: React.FC = () => {
  const [calculatedBMR, setCalculatedBMR] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const [gender, setGender] = useState<string>();

  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  // calculate BMI
  const calculateBMR = () => {
    const enteredAge = ageInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    let bmr: number;

    if (
      !enteredAge || !enteredHeight || !enteredWeight ||
      +enteredHeight <= 0 || +enteredWeight <= 0 || +enteredAge <= 0
    ) {
      setError('Please enter a valid (non-negative) input!');
      return;
    } else if (!gender) {
      setError('Please choose a gender!');
      return;
    }

    // if (calcUnits === 'cmkg') {
      if (gender === 'male') {
        bmr = 66 + (13.7 * +enteredWeight) + (5 * +enteredHeight) - (6.8 * +enteredAge);
      } else {
        bmr = 665 + (9.6 * +enteredWeight) + (1.8 * +enteredHeight) - (4.7 * +enteredAge);
      }
    // } else {
    //   // TODO: calculation with ft/lbs
    //   if (gender === 'male') {
    //     bmr = 0
    //   } else {
    //     bmr = 1
    //   }
    //   // ! bmr = +enteredWeight / (+enteredHeight * 12) ** 2 * 703;
    // }

    setCalculatedBMR(bmr);
  }

  // reset inputs
  const resetInputs = () => {
    ageInputRef.current!.value = '';
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setGender(undefined);
    setCalculatedBMR(undefined);
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
            <IonTitle>BMR Calculator</IonTitle>
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
                  <IonLabel position='floating'>Age</IonLabel>
                  <IonInput type="number" ref={ageInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem lines='none'>
                  <IonLabel>Gender</IonLabel>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
              <IonRow>
                <IonCol size='6'>
                  <IonItem>
                    <IonLabel>Male</IonLabel>
                    <IonRadio slot='start' value='male' />
                  </IonItem>
                </IonCol>
                <IonCol size='6'>
                  <IonItem>
                    <IonLabel>Female</IonLabel>
                    <IonRadio slot='start' value='female' />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonRadioGroup>
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
            <BmrControls onCalculate={calculateBMR} onReset={resetInputs} />
            {calculatedBMR && <BmrResult calculatedBMR={calculatedBMR} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default BmrCalc;
