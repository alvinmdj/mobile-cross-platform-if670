import { 
  IonButton, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol sizeSm='8' offsetSm='2' sizeMd='6' offsetMd='3'>
              <h2 className='ion-text-center'>00000035733 - Alvin Martin Djong</h2>
              <IonButton expand='block' routerLink='/bmi'>BMI Calculator</IonButton>
              <IonButton expand='block' routerLink='/bmr'>BMR Calculator</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
