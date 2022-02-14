import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h2>00000035733 - Alvin Martin Djong</h2>
        <IonButton expand='block' routerLink='/bmi'>BMI Calculator</IonButton>
        <IonButton expand='block' routerLink='/bmr'>BMR Calculator</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
