import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  isPlatform
} from "@ionic/react";
import { addOutline } from "ionicons/icons";

interface HeaderProps {
  color: 'success' | 'danger';
  title: string;
};

const Header = (props: HeaderProps) => {
  const { color, title } = props;

  return (
    <IonHeader>
      <IonToolbar color={color}>
        <IonButtons slot='start'>
          <IonMenuButton />
        </IonButtons>
        {!isPlatform('android') && (
          <IonButtons slot='end'>
            <IonButton routerLink='/tabs/new'>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
