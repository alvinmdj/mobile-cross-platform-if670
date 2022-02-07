import { useRef, useState } from 'react';
import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';

/* Import components */
import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InputControl from './components/InputControl';

setupIonicReact();

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const [category, setCategory] = useState<string>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const bmiCategory = (bmi: number): string => {
    if (bmi < 18.5) return "Kurus";
    else if (bmi <= 24.9) return "Normal";
    else if (bmi <= 29.9) return "Gemuk";
    else return "Obesitas";
  }

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    let bmi: number;

    if (!enteredHeight || !enteredWeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
      setError('Please enter a valid (non-negative) height and weight!');
      return;
    }

    if (calcUnits === 'cmkg') {
      bmi = +enteredWeight / (+enteredHeight / 100) ** 2;
    } else {
      bmi = +enteredWeight / (+enteredHeight * 12) ** 2 * 703;
    }

    // console.log(bmi);
    setCategory(bmiCategory(bmi));
    setCalculatedBMI(bmi);
  }

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setCalculatedBMI(undefined);
    setCategory(undefined);
  }

  const clearError = () => {
    setError(undefined)
  }

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
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
    setCalcUnits(selectedValue);
  }

  return (
    <>
      <IonAlert 
        isOpen={!!error}  // '!!' ensures that the value is a boolean
        message={error}
        buttons={ [ { text: 'Okay', handler: clearError } ] }
      />
      <IonApp>
        <IonHeader>
          <IonToolbar>
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

export default App;
