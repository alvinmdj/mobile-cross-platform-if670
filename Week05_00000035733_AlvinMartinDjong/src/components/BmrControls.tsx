import {
  IonButton,
  IonCol, 
  IonIcon, 
  IonRow 
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";

interface Props {
  onCalculate: () => void;
  onReset: () => void;
}

const BmrControls: React.FC<Props> = props => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton expand="block" color="success" onClick={props.onCalculate}>
          <IonIcon slot="start" icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton expand="block" fill="clear" color="medium" onClick={props.onReset}>
          <IonIcon slot="start" icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmrControls;
