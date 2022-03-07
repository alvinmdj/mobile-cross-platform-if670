import { IonAvatar, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react'
import { heart } from 'ionicons/icons'
import React, { useEffect, useRef } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

const CandidateList: React.FC = () => {
  const { candidate, addTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const addToTargetHandler = (c: CandidateInfo) => {
    slidingOptionsRef.current?.closeOpened();
    addTarget(c)
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
            <IonItem lines="full">
              <IonAvatar slot='start'>
                <img src={c.photo} alt={c.name} />
              </IonAvatar>
              <IonLabel>{c.name}</IonLabel>
              {c.gender}
            </IonItem>
          </IonItemSliding>
        )
      })}
    </>
  )
}

export default CandidateList