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
import { useEffect } from 'react'

import { useSplashScreen } from '../../contexts/SplashScreenContext'
import SplashScreen from '../SplashScreen'
import SearchByTypes from './SearchByType'
import CookingGuides from './CookingGuides'
import './Home.css'

const Home: React.FC = () => {
  const { showSplashScreen, setShowSplashScreen} = useSplashScreen()

  // Show splash screen on first load for 3 seconds
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
      {/* hero */}
      <div className='hero-container'>
        <IonImg src="/assets/hero.webp" />
        <div className="bottom-left">Get your Joule. Be happy.</div>
        <div className='bottom-right'>Explore</div>
      </div>

      {/* search by type section */}
      <SearchByTypes />

      {/* cooking guides section */}
      <CookingGuides />

      {/* bottom-center FAB */}
      <IonFab className='center-fab' vertical="bottom" slot="fixed">
        <IonButton className='search-fab-btn' strong mode='ios' shape='round'>
          <IonLabel>Search for Joule</IonLabel>
        </IonButton>
      </IonFab>

      {/* bottom-end FAB */}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton size='small'>
          <IonIcon icon={qrCodeOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
  )
}

export default Home