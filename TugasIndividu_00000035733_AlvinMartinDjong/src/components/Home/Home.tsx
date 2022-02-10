import { 
  IonButton,
  IonContent, 
  IonFab, 
  IonFabButton,
  IonIcon,
  IonImg,
  IonLabel
} from '@ionic/react'
import { qrCodeOutline } from 'ionicons/icons'
import CookingGuides from './CookingGuides'
import SearchByTypes from './SearchByType'

import './Home.css'

const Home: React.FC = () => {
  return (
    <IonContent class='home-content' fullscreen>
      
      <div className='hero-container'>
        <IonImg src="/assets/hero.webp" />
        <div className="bottom-left">Get your Joule. Be happy.</div>
        <div className='bottom-right'>Explore</div>
      </div>

      <SearchByTypes />

      <CookingGuides />

      <IonFab className='center-fab' vertical="bottom" slot="fixed">
        <IonButton className='search-fab-btn' strong mode='ios' shape='round'>
          <IonLabel>Search for Joule</IonLabel>
        </IonButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton size='small'>
          <IonIcon icon={qrCodeOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
  )
}

export default Home