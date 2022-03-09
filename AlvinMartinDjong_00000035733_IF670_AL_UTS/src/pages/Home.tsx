import {
  IonCard,
  IonCol,
  IonContent,
  IonPage,
  IonRow
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import CandidateList from '../components/CandidateList';
import Header from '../components/Header';
import { useCandidate } from '../contexts/CandidateContext';

import './Home.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Home: React.FC = () => {
  const { candidate, target } = useCandidate()

  // Shuffle all candidates (from both candidate & target array)
  const shuffleArray = () => {
    let allCandidates = candidate.concat(target)
    for (let i = allCandidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCandidates[i], allCandidates[j]] = [allCandidates[j], allCandidates[i]];
    }
    return allCandidates
  }

  // get 10 items from shuffled array
  const randomCandidates = shuffleArray().slice(0, 10)

  return (
    <IonPage>
      <Header title='Bosen Jomblo' />
      <IonContent fullscreen color='light'>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
        >
          {randomCandidates.map((c, index) => (
            <SwiperSlide key={index}>
              <IonCard button className={index % 2 === 0 ? 'odd-card' : ''}>
                <IonRow>
                  <IonCol size='12' class='ion-text-center' style={{ marginTop: '10px' }}>
                    <img src={c.photo} width={60} height={60} alt={c.name} />
                  </IonCol>
                  <IonCol class='ion-text-center' style={{ minHeight:'50px' }}>
                    <p style={{ margin: 0, padding: '0 5px' }}>{c.name}</p>
                  </IonCol>
                </IonRow>
              </IonCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <CandidateList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
