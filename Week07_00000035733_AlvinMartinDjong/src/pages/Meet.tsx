import { isPlatform } from '@ionic/core';
import { IonAlert, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { addOutline, ban, create, trash } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import FriendsContext from '../data/friend-context';

interface FriendProps {
  id: string
  name: string
  photo: string
}

// export const FRIENDS_DATA = [
//   {id: 'f1', name: 'John Thor', photo: 'f1.webp'},
//   {id: 'f2', name: 'John Ness', photo: 'f2.webp'},
//   {id: 'f3', name: 'John Doe', photo: 'f3.webp'}
// ];

const Meet: React.FC = () => {
  const friendsCtx  = useContext(FriendsContext);

  const nameRef = useRef<HTMLIonInputElement>(null);

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const [selectedFriend, setSelectedFriend] = useState<FriendProps | null>();
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>();

  const [toastMessage, setToastMessage] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  // call friend handler 
  const callFriendHandler = () => {
    console.log("Calling...");
  };
  
  // add/update friend handler
  const saveFriendHandler = () => {
    const enteredName = nameRef.current!.value;
    if(!enteredName) return;
    if(selectedFriend === null) {
      friendsCtx.addFriend(enteredName.toString(), 'f1.webp');
      setToastMessage('New friend has been added!');
      console.log("Adding friend...");
    }
    if(selectedFriend !== null) {
      friendsCtx.updateFriend(selectedFriendId!, enteredName.toString(), 'f1.webp');
      setToastMessage(`${selectedFriend?.name} has been updated!`);
      setSelectedFriend(null);
      setSelectedFriendId(null);
      console.log("Updating friend...");
    }
    setIsEditing(false);
  }
  
  // open modal to add new friend
  const startAddFriendHandler = () => {
    setIsEditing(true)
    setSelectedFriend(null)
  }
  
  // trigger alert to block friend
  const [startBlocking, setStartBlocking] = useState(false);
  const startBlockFriendHandler = () => {
    setStartBlocking(true);
    slidingOptionsRef.current?.closeOpened();
  }

  // block friend handler
  const blockFriendHandler = (/* event: React.MouseEvent */) => {
    // event.stopPropagation();
    setStartBlocking(false);
    setToastMessage('Blocked Friend!');
    console.log("Blocking...");
  };

  // trigger alert to delete friend
  const [startDeleting, setStartDeleting] = useState(false);
  const startDeleteFriendHandler = (id: string) => {
    setSelectedFriendId(id);
    setStartDeleting(true);
    slidingOptionsRef.current?.closeOpened();
  }

  // delete a friend handler
  const deleteFriendHandler = () => {
    friendsCtx.deleteFriend(selectedFriendId!);
    setStartDeleting(false);
    setSelectedFriendId(null);
    setToastMessage('Deleted Friend!');
    console.log("Deleting...");
  }

  // trigger alert to update friend
  const startEditFriendHandler = (friendId: string) => {
    slidingOptionsRef.current?.closeOpened();
    console.log("Editing...");
    const friend = friendsCtx.friends.find(f => f.id === friendId);
    setSelectedFriend(friend);
    setSelectedFriendId(friendId);
    setIsEditing(true);
  }

  // cancel add/edit and close the modal
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
                <IonItemOption color='warning' onClick={() => startDeleteFriendHandler(friend.id)}>
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