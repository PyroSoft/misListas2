import React from 'react';
import './ExploreContainer.css';
import { IonAvatar } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonAvatar class="avatar">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="avatar"/>
      </IonAvatar>
      <strong>{name}</strong> 
    </div>
  );
};

export default ExploreContainer;
