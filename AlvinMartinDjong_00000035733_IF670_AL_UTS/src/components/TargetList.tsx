import { IonAvatar, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react'
import { close } from 'ionicons/icons'
import React, { useRef } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

const TargetList: React.FC = () => {
  const { target, removeTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  const removeFromTargetHandler = (c: CandidateInfo) => {
    slidingOptionsRef.current?.closeOpened();
    removeTarget(c)
  }


  return (
    <>
      {target.map((c, index) => {
        return (
          <IonItemSliding key={index} ref={slidingOptionsRef}>
            <IonItemOptions side='end'>
              <IonItemOption color='danger' onClick={() => removeFromTargetHandler(c)}>
                <IonIcon slot='icon-only' icon={close} />
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

export default TargetList