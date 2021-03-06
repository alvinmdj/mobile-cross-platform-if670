import React from 'react'
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { mailOutline, videocamOutline } from 'ionicons/icons'
import { Redirect, Route, useLocation } from 'react-router'

import Mail from './Mail'
import Meet from './Meet'
import Spam from './Spam'

const MailTabs: React.FC = () => {
  const { pathname } = useLocation()
  
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="tabs/mail" />
        <Route exact path="/tabs/mail" component={Mail} />
        <Route exact path="/tabs/meet" component={Meet} />
        <Route exact path="/tabs/spam" component={Spam} />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton selected={pathname.includes('mail')} tab='mail' href='/tabs/mail'>
          <IonIcon icon={mailOutline} />
          <IonLabel>Mail</IonLabel>
        </IonTabButton>
        <IonTabButton selected={pathname.includes('meet')} tab='meet' href='/tabs/meet'>
          <IonIcon icon={videocamOutline} />
          <IonLabel>Meet</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default MailTabs