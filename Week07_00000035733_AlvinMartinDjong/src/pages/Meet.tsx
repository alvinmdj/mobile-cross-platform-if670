import { isPlatform } from '@ionic/core';
import { IonAlert, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { addOutline, ban, create, trash } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import FriendsContext from '../data/friend-context';

interface FriendProps {
  id: string
  name: string
  thumbnail: string
}

export const FRIENDS_DATA = [
  {id: 'f1', name: 'John Thor', thumbnail: 'f1.webp'},
  {id: 'f2', name: 'John Ness', thumbnail: 'f2.webp'},
  {id: 'f3', name: 'John Doe', thumbnail: 'f3.webp'}
];

const Meet: React.FC = () => {
  const friendsCtx  = useContext(FriendsContext);

  const nameRef = useRef<HTMLIonInputElement>(null);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const [toastMessage, setToastMessage] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  
  const saveFriendHandler = () => {
    const enteredName = nameRef.current!.value;
    if(!enteredName) return;
    if(selectedFriend === null) {
      friendsCtx.addFriend(enteredName.toString(), '');
    }
    setIsEditing(false);
  }
  
  const startAddFriendHandler = () => {
    console.log("Adding friend...");
    setIsEditing(true)
    setSelectedFriend(null)
  }

  const callFriendHandler = () => {
    console.log("Calling...");
  };
  
  const [startBlocking, setStartBlocking] = useState(false);
  const startBlockFriendHandler = () => {
    setStartBlocking(true);
    slidingOptionsRef.current?.closeOpened();
  }

  const blockFriendHandler = (/* event: React.MouseEvent */) => {
    // event.stopPropagation();
    setStartBlocking(false);
    setToastMessage('Blocked Friend!');
    console.log("Blocking...");
  };

  const [startDeleting, setStartDeleting] = useState(false);
  const startDeleteFriendHandler = () => {
    setStartDeleting(true);
    slidingOptionsRef.current?.closeOpened();
  }

  const deleteFriendHandler = () => {
    setStartDeleting(false);
    setToastMessage('Deleted Friend!');
    console.log("Deleting...");
  }

  const [selectedFriend, setSelectedFriend] = useState<FriendProps | null>();
  const startEditFriendHandler = (friendId: string) => {
    slidingOptionsRef.current?.closeOpened();
    console.log("Editing...");
    const friend = FRIENDS_DATA.find(f => f.id === friendId);
    setSelectedFriend(friend);
    setIsEditing(true);
  }

  const cancelEditFriendHandler = () => {
    setIsEditing(false);
  }

  return (
    <React.Fragment>
      <IonAlert
        isOpen={startDeleting}
        header={'Delete Friend'}
        message={'Do you want to delete your friend? This cannot be undone'}
        buttons={[
          {text: 'No', role: 'cancel', handler: () => {setStartDeleting(false)}},
          {text: 'Yes', handler: deleteFriendHandler}
        ]}
      />
      <IonAlert
        isOpen={startBlocking}
        header={'Block Friend'}
        message={'Do you want to block your friend? This cannot be undone'}
        buttons={[
          {text: 'No', role: 'cancel', handler: () => {setStartBlocking(false)}},
          {text: 'Yes', handler: blockFriendHandler}
        ]}
      />
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => setToastMessage('')}
      />
      <IonModal isOpen={isEditing}>
        <IonHeader>
          <IonToolbar class='ion-text-center'>
            <IonLabel>Edit Friend</IonLabel>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Friend Name</IonLabel>
                  <IonInput type='text' ref={nameRef} value={selectedFriend?.name} />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className='ion-text-center'>
              <IonCol>
                <IonButton fill='clear' color='dark' onClick={cancelEditFriendHandler}>Cancel</IonButton>
              </IonCol>
              <IonCol>
                <IonButton color='secondary' expand='block' onClick={saveFriendHandler}>Save</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton />
            </IonButtons>
            {!isPlatform('android') && (
              <IonButtons slot='end'>
                <IonButton onClick={startAddFriendHandler}>
                  <IonIcon icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
            <IonTitle>Meet</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          {/* {FRIENDS_DATA.map(friend => ( */}
          {friendsCtx.friends.map(friend => (
            <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
              <IonItemOptions side='start'>
                <IonItemOption color='danger' onClick={startBlockFriendHandler}>
                  <IonIcon slot='icon-only' icon={ban} />
                </IonItemOption>
                <IonItemOption color='warning' onClick={startDeleteFriendHandler}>
                  <IonIcon slot='icon-only' icon={trash} />
                </IonItemOption>
              </IonItemOptions>
              <IonItemOptions side='end'>
                <IonItemOption color='warning' onClick={startEditFriendHandler.bind(null, friend.id)}>
                  <IonIcon slot='icon-only' icon={create} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem
                lines="full"
                button
                onClick={callFriendHandler}
              >
                <IonAvatar slot='start'>
                  <img src={`assets/thumbnails/${friend.photo}`} alt={friend.name} />
                </IonAvatar>
                <IonLabel>{friend.name}</IonLabel>
              </IonItem>
            </IonItemSliding>
          ))}
          {isPlatform('android') && (
            <IonFab horizontal='end' vertical='bottom' slot='fixed'>
              <IonFabButton color='secondary' onClick={startAddFriendHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  )
};

export default Meet;