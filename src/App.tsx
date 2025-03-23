import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';



import React from 'react';
import '@ionic/react/css/core.css';
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        {/* Header with My Name */}
        <IonHeader>
          <IonToolbar style={{ backgroundColor: '#e0f7fa' }}> 
            <IonTitle style={{ color: 'black' }}>Welcome, Benjamin Haruna Bala</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* My Content */}
        <IonContent fullscreen className="ion-padding" style={{ backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
          <h2 style={{ color: 'blue', fontSize: '24px', fontWeight: 'bold' }}>Welcome to Bootcamp</h2>
        </IonContent>

        {/* My Footer */}
        <IonFooter>
          <IonToolbar>
            <IonTitle size="small" style={{ textAlign: 'center' }}>Day 1 Assignment</IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </IonApp>
  );
};

export default App;
