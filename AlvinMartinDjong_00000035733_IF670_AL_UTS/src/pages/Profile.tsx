import {
  IonContent,
  IonPage
} from '@ionic/react'
import React from 'react'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'

const Profile: React.FC = () => {
  return (
    <IonPage>
      <Header title='Profil' />
      <IonContent fullscreen color='light'>
        <ProfileCard />
      </IonContent>
    </IonPage>
  )
}

export default Profile