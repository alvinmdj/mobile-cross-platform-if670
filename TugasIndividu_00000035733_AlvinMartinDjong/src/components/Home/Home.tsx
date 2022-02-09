import { 
  IonContent, 
  IonFab, 
  IonFabButton,
  IonIcon,
  IonImg, 
  IonLabel
} from '@ionic/react'
import { qrCodeOutline } from 'ionicons/icons'
import CookingGuides from './CookingGuides'
import FoodTypes from './SearchByType'

const Home: React.FC = () => {
  return (
    <IonContent fullscreen>

      <IonImg src="/assets/hero.webp" />

      <FoodTypes />

      <CookingGuides />

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton>
          <IonLabel>Search for Joule</IonLabel>
        </IonFabButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={qrCodeOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonContent>
  )
}

export default Home