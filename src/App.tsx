import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import './App.css'
import { IonReactRouter } from '@ionic/react-router';
import { bulb, home ,settings,film} from 'ionicons/icons';
import Home from './pages/Home';
import SubLights from './pages/SubLights';
import Lights from './pages/Lights';
import Settings from './pages/Settings';
import MediaServer from './pages/MediaServer';


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

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/lights">
            <Lights />
          </Route>
          <Route exact path="/sublights/:item/">
            <SubLights />
          </Route>
          <Route exact path="/media-server">
            <MediaServer />
          </Route>
          {/* <Route exact path="/settings">
            <Settings />
          </Route> */}
        </IonRouterOutlet>
        <IonTabBar  slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel> 
          </IonTabButton>
          <IonTabButton tab="Lights" href="/lights">
            <IonIcon icon={bulb} />
            <IonLabel>Lights</IonLabel>
          </IonTabButton>
          <IonTabButton tab="MediaServer" href="/media-server">
            <IonIcon icon={film} />
            <IonLabel>Media Server</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="Settings" href="/settings">
            <IonIcon icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
