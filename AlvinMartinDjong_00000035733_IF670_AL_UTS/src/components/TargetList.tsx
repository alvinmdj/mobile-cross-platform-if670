import { 
  IonActionSheet,
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel,
  IonCol,
  IonRow,
  useIonLoading,
  useIonToast,
} from '@ionic/react'
import { close, returnDownBack, trash } from 'ionicons/icons'
import React, { useRef, useState } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

import './TargetList.css'

const TargetList: React.FC = () => {
  const [ presentLoading ] = useIonLoading()
  const [ presentToast, dismissToast ] = useIonToast()

  const [showActionSheet, setShowActionSheet] = useState(false)
  const [selectedTarget, setSelectedTarget] = useState<CandidateInfo | undefined>(undefined)

  const { target, removeTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  const handleClick = (c: CandidateInfo) => {
    setShowActionSheet(true)
    setSelectedTarget(c)
  }

  const removeFromTargetHandler = (c: CandidateInfo) => {
    presentLoading('Loading', 1000, 'bubbles')
    slidingOptionsRef.current?.closeOpened();
    removeTarget(c)
    setSelectedTarget(undefined)
    setTimeout(() => {
      presentToast({
        buttons: [{ text: 'hide', handler: () => dismissToast() }],
        duration: 3000,
        message: `${c.name} telah dikeluarkan dari target!`
      })
    }, 1000)
  }

  return (
    <>
      {target.map((c, index) => {
        return (
          <IonItemSliding key={index} ref={slidingOptionsRef}>
            <IonItemOptions side='end'>
              <IonItemOption color='danger' onClick={() => handleClick(c)}>
                <IonIcon slot='icon-only' icon={close} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem lines="full" className={`target-item ${index % 2 === 0 ? 'odd-target' : ''}`}>
              <IonRow>
                <IonCol>
                  <img src={c.photo} alt={c.name} width={60} height={60} />
                </IonCol>
                <IonCol class='ion-margin-start'>
                  <IonLabel style={{ fontSize: '20px', marginBottom: '5px' }}>{c.name}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>{c.status}</IonLabel>
                  <IonLabel style={{ fontSize: '14px' }}>{c.gender === 'Male' ? '???' : '???'} {c.gender}</IonLabel>
                </IonCol>
              </IonRow>
            </IonItem>
          </IonItemSliding>
        )
      })}
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        header= 'Yakin gak gebet dia lagi?'
        buttons={[{
          text: 'Yakin, hapus dari daftar',
          role: 'destructive',
          icon: trash,
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            removeFromTargetHandler(selectedTarget!)
          }
        }, {
          text: 'Ga yakin, kembali',
          icon: returnDownBack,
          role: 'cancel',
          handler: () => {
            slidingOptionsRef.current?.closeOpened();
          }
        }]}
      >
      </IonActionSheet>
    </>
  )
}

export default TargetList