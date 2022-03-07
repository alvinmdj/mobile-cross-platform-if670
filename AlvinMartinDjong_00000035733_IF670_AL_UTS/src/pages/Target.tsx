import { 
  IonContent,
  IonPage
} from '@ionic/react'
import React from 'react'
import EmptyTarget from '../components/EmptyTarget'
import Header from '../components/Header'
import { useCandidate } from '../contexts/CandidateContext'

const Target: React.FC = () => {
  const { target } = useCandidate()

  return (
    <IonPage>
      <Header title='Target Gebetan' />
      <IonContent fullscreen>
        {target && (
          target.map((t, index) => (
            <div key={index}>{t.name}</div>
          ))
        )}
        {target.length === 0 && <EmptyTarget />}
      </IonContent>
    </IonPage>
  )
}

export default Target