import { 
  IonContent,
  IonPage
} from '@ionic/react'
import React from 'react'
import EmptyTarget from '../components/EmptyTarget'
import Header from '../components/Header'

const Target: React.FC = () => {
  return (
    <IonPage>
      <Header title='Target Gebetan' />
      <IonContent fullscreen>
        <div>Target page</div>
        <EmptyTarget />
      </IonContent>
    </IonPage>
  )
}

export default Target