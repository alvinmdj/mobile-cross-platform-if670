import { 
  IonButton,
  IonContent, 
  IonFab, 
  IonFabButton,
  IonIcon,
  IonImg,
  IonLabel
} from '@ionic/react'
import { useEffect } from 'react'
import { qrCodeOutline } from 'ionicons/icons'

import { useSplashScreen } from '../../contexts/SplashScreenContext'
import SplashScreen from '../SplashScreen'
import CookingGuides from './CookingGuides'
import SearchByTypes from './SearchByType'
import './Home.css'

const Home: React.FC = () => {
  const { showSplashScreen, setShowSplashScreen} = useSplashScreen()

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, [setShowSplashScreen])

  if (showSplashScreen) {
    return <SplashScreen />
  }

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