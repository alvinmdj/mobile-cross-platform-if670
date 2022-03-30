import React from 'react';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { Route, Redirect, useLocation } from 'react-router';
import { happyOutline, sadOutline } from 'ionicons/icons';
import BadMemories from './BadMemories';
import GoodMemories from './GoodMemories';
import NewMemory from './NewMemory';

const MemoryTabs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path='/tabs' to='tabs/good' />
        <Route exact path='/tabs/new' component={NewMemory} />
        <Route exact path='/tabs/good' component={GoodMemories} />
        <Route exact path='/tabs/bad' component={BadMemories} />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton selected={pathname.includes('good')} tab='good' href='/tabs/good'>
          <IonIcon icon={happyOutline} />
          <IonLabel>Good Memories</IonLabel>
        </IonTabButton>
        <IonTabButton selected={pathname.includes('bad')} tab='bad' href='/tabs/bad'>
          <IonIcon icon={sadOutline} />
          <IonLabel>Bad Memories</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MemoryTabs;