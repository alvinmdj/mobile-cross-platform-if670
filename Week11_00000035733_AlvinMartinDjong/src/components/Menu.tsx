import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/react";

const Menu = () => {
  return (
    <IonMenu side="start" contentId="main">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button routerLink='/students'>
              <IonLabel>Students</IonLabel>
            </IonItem>
            <IonItem button routerLink='/tabs/good'>
              <IonLabel>Good Memories</IonLabel>
            </IonItem>
            <IonItem button routerLink='/tabs/bad'>
              <IonLabel>Bad Memories</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
