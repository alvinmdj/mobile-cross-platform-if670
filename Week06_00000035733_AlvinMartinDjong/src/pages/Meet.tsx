import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ban, create, trash } from 'ionicons/icons';
import React, { useRef } from 'react';

export const FRIENDS_DATA = [
  {id: 'f1', name: 'John Thor'},
  {id: 'f2', name: 'John Ness'},
  {id: 'f3', name: 'John Doe'}
];

const Meet: React.FC = () => {
  const callFriendHandler = () => {
    console.log("Calling...");
  };

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const blockFriendHandler = (/* event: React.MouseEvent */) => {
    // event.stopPropagation();
    slidingOptionsRef.current?.closeOpened();
    console.log("Blocking...");
  };

  const deleteFriendHandler = () => {
    slidingOptionsRef.current?.closeOpened();
    console.log("Deleting...");
  }

  const editFriendHandler = () => {
    slidingOptionsRef.current?.closeOpened();
    console.log("Editing...");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Meet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        {FRIENDS_DATA.map(friend => (
          <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
            <IonItemOptions side='start'>
              <IonItemOption color='danger' onClick={blockFriendHandler}>
                <IonIcon slot='icon-only' icon={ban} />
              </IonItemOption>
              <IonItemOption color='warning' onClick={deleteFriendHandler}>
                <IonIcon slot='icon-only' icon={trash} />
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side='end'>
              <IonItemOption color='warning' onClick={editFriendHandler}>
                <IonIcon slot='icon-only' icon={create} />
              </IonItemOption>
            </IonItemOptions>
            <IonItem
              lines="full"
              button
              onClick={callFriendHandler}
            >
              <IonAvatar slot='start'>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              <IonLabel>{friend.name}</IonLabel>
            </IonItem>
          </IonItemSliding>
        ))}
      </IonContent>
    </IonPage>
  )
};

export default Meet;