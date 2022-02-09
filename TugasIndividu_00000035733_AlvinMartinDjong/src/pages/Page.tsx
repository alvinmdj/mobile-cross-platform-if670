import { IonPage } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import Home from '../components/Home/Home';
import Search from '../components/Search/Search';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      {name !== 'Search' && <Header />}
      {
        name === 'Home' ? <Home /> :
        name === 'Search' ? <Search /> :
        <ExploreContainer name={name} />
      }
    </IonPage>
  );
};

export default Page;
