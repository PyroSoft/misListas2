import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonFab,
  IonFabButton,
  IonAvatar
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {  homeOutline, homeSharp, add } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Hoy',
    url: '/home/Fernando',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" lines="full">
          <IonItem lines="full">
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="avatar"/>
            </IonAvatar>
            <IonListHeader>Fernando</IonListHeader>
          </IonItem>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="full" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonMenuToggle autoHide={false}>
          <IonFab vertical="bottom" horizontal="end">
            <IonItem lines="none" routerLink={"/list/Nueva Lista"}>
              <IonLabel>Nueva Lista</IonLabel>
              <IonFabButton size ="small">
                <IonIcon icon={add} />
              </IonFabButton>
            </IonItem>
          </IonFab>
        </IonMenuToggle>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
