import { 
  IonAvatar,
  IonActionSheet,
  IonIcon, 
  IonItem, 
  IonItemOption, 
  IonItemOptions, 
  IonItemSliding, 
  IonLabel,
} from '@ionic/react'
import { close, trash } from 'ionicons/icons'
import React, { useRef, useState } from 'react'
import { CandidateInfo, useCandidate } from '../contexts/CandidateContext'

const TargetList: React.FC = () => {

  const [showActionSheet, setShowActionSheet] = useState(false)
  const [selectedTarget, setSelectedTarget] = useState<CandidateInfo | undefined>(undefined)

  const { target, removeTarget } = useCandidate()

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)

  const handleClick = (c: CandidateInfo) => {
    setShowActionSheet(true)
    setSelectedTarget(c)
  }

  const removeFromTargetHandler = (c: CandidateInfo) => {
    slidingOptionsRef.current?.closeOpened();
    removeTarget(c)
    setSelectedTarget(undefined)
  }

  // clean up
  // useEffect(() => {
  //   let isMounted = true
  //   return () => { isMounted = false }
  // }, [target])

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
          icon: close,
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