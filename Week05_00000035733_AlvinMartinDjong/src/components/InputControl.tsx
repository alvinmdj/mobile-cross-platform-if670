import { 
  IonLabel, 
  IonSegment, 
  IonSegmentButton 
} from '@ionic/react';
import React from 'react';

interface Props {
  selectedValue: 'cmkg' | 'ftlbs';
  onSelectValue: (value: 'cmkg' | 'ftlbs') => void;
}

const InputControl: React.FC<Props> = ({ selectedValue, onSelectValue }) => {
  const inputChangeHandler = (event: CustomEvent) => {
    onSelectValue(event.detail.value);
  };

  return (
    <IonSegment value={selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="cmkg">
        <IonLabel>cm/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControl;
