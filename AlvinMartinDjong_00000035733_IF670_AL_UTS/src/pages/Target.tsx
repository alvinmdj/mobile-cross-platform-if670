import { 
  IonContent,
  IonPage
} from '@ionic/react'
import React from 'react'
import EmptyTarget from '../components/EmptyTarget'
import Header from '../components/Header'
import TargetList from '../components/TargetList'
import { useCandidate } from '../contexts/CandidateContext'

const Target: React.FC = () => {
  const { target } = useCandidate()

  return (
    <IonPage>
      <Header title='Target Gebetan' />
      <IonContent fullscreen>
        {target.length > 0 && <TargetList />}
        {target.length === 0 && <EmptyTarget />}
      </IonContent>
    </IonPage>
  )
}

export default Target