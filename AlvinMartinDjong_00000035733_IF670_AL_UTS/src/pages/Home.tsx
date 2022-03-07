import {
  IonCard,
  IonCardContent,
  IonContent,
  IonPage,
  IonThumbnail
} from '@ionic/react';
import './Home.css';
import CandidateList from '../components/CandidateList';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';

// https://swiperjs.com/react/
import '../../node_modules/swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header title='Bosen Jomblo' />
      <IonContent fullscreen>
        <Swiper
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
          <SwiperSlide>
            <IonCard>
              <IonThumbnail><img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" /></IonThumbnail>
              <IonCardContent>
                Alvin Martin Djong
              </IonCardContent>
            </IonCard>
          </SwiperSlide>
        </Swiper>
        <CandidateList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
