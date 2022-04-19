import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React from 'react';

interface FabProps {
  color: 'success' | 'danger';
};

const Fab: React.FC<FabProps> = ({ color }) => {
  return (
    <IonFab horizontal='end' vertical='bottom' slot='fixed'>
      <IonFabButton color={color} routerLink='/tabs/new'>
        <IonIcon icon={addOutline} />
      </IonFabButton>
    </IonFab>
  );
};

export default Fab;