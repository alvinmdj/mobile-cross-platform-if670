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
  const { isEmptyTarget } = useCandidate()

  return (
    <IonPage>
      <Header title='Target Gebetan' />
      <IonContent fullscreen>
        {!isEmptyTarget && <TargetList />}
        {isEmptyTarget && <EmptyTarget />}
      </IonContent>
    </IonPage>
  )
}

export default Target