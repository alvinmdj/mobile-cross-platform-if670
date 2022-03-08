import {
  IonCol, 
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel, 
  IonRow, 
  useIonLoading 
} from '@ionic/react'
import { heart } from 'ionicons/icons'
import React, { useRef } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

import './CandidateList.css'

const CandidateList: React.FC = () => {
  const [ present ] = useIonLoading()

  const { candidate, addTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  const addToTargetHandler = (c: CandidateInfo) => {
    present('Loading', 1500, 'bubbles')
    setTimeout(() => {
      slidingOptionsRef.current?.closeOpened();
      addTarget(c)
    }, 1500)
  }

  return (
    <>
      {candidate.map((c, index) => {
        return (
          <IonItemSliding key={index} ref={slidingOptionsRef}>
            <IonItemOptions side='end'>
              <IonItemOption color='primary' onClick={() => addToTargetHandler(c)}>
                <IonIcon slot='icon-only' icon={heart} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem lines="full" className='candidate-item'>
              <IonRow>
                <IonCol>
                  <img src={c.photo} alt={c.name} width={60} height={60} />
                </IonCol>
                <IonCol class='ion-margin-start'>
                  <IonLabel style={{ fontSize: '20px', marginBottom: '5px' }}>{c.name}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>{c.status}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>♀ {c.gender}</IonLabel>
                </IonCol>
              </IonRow>
            </IonItem>
          </IonItemSliding>
        )
      })}
    </>
  )
}

export default CandidateList