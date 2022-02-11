import { IonPage } from '@ionic/react';
import { useParams } from 'react-router';

import { useSplashScreen } from '../contexts/SplashScreenContext';
import Header from '../components/Header';
import Home from '../components/Home/Home';
import Search from '../components/Search/Search';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const { showSplashScreen } = useSplashScreen()

  return (
    <IonPage>
      {name !== 'Search' && !showSplashScreen && <Header />}
      {
        name === 'Home' ? <Home /> :
        name === 'Search' ? <Search /> :
        <ExploreContainer name={name} />
      }
    </IonPage>
  );
};

export default Page;
