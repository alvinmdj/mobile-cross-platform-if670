import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { chatbox, colorWandOutline, helpCircleOutline, homeOutline, openOutline, settingsOutline } from 'ionicons/icons';

import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    icon: homeOutline,
  },
  {
    title: 'Tips & Tricks',
    url: '/page/Tips',
    icon: colorWandOutline,
  },
  {
    title: 'Help & Support',
    url: '/page/Help',
    icon: helpCircleOutline,
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    icon: settingsOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu menuId='main-menu' contentId="main" type="push">
      <IonContent>
        <IonList id="item-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === appPage.url ? 'selected' : ''} 
                  routerLink={appPage.url} 
                  routerDirection="none" 
                  lines="none" 
                  detail={false}
                >
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <div className='chatbox'>
          <IonIcon className='chatbox-icon' icon={chatbox} />
          <div className='chatbox-item'>
            <p>Get your claws around Joule today!</p>
            <a target='_blank' href="https://www.chefsteps.com/joule">Check it out</a>
            {' '}
            <IonIcon className='open-icon' icon={openOutline} />
          </div>
        </div>
        <img className='crab-icon' src="/assets/crab.png" alt="Crab" />
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
