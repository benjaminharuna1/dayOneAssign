import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome, Benjamin Haruna Bala</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-content">
        <div className="welcome-message">
          Welcome to Bootcamp
        </div>
      </IonContent>

      {/* Footer */}
      <IonFooter>
        <IonToolbar>
          <IonTitle>Day 1 Assignment</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;