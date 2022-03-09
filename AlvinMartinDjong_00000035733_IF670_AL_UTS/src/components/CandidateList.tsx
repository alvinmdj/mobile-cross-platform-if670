import {
  IonCol, 
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel, 
  IonRow, 
  useIonLoading, 
  useIonToast
} from '@ionic/react'
import { heart } from 'ionicons/icons'
import React, { useRef } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

import './CandidateList.css'

const CandidateList: React.FC = () => {
  const [ presentLoading ] = useIonLoading()
  const [ presentToast, dismissToast ] = useIonToast()

  const { candidate, addTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  const addToTargetHandler = (c: CandidateInfo) => {
    presentLoading('Loading', 1500, 'bubbles')
    setTimeout(() => {
      slidingOptionsRef.current?.closeOpened();
      addTarget(c)
      presentToast({
        buttons: [{ text: 'hide', handler: () => dismissToast() }],
        duration: 3000,
        message: `${c.name} masuk ke target gebetan!`
      })
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
            <IonItem
              className={`candidate-item ${index % 2 === 0 ? 'odd-candidate' : ''}`}
              lines="none"
            >
              <IonRow>
                <IonCol>
                  <img src={c.photo} alt={c.name} width={60} height={60} />
                </IonCol>
                <IonCol class='ion-margin-start'>
                  <IonLabel style={{ fontSize: '20px', marginBottom: '5px' }}>{c.name}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>{c.status}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>{c.gender === 'Male' ? '♂' : '♀'} {c.gender}</IonLabel>
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