import { IonContent, IonPage } from "@ionic/react";
import HeaderComp from "../components/HeaderComp";
import "../App.css";
const MediaServer = () => {
  return (
    <>
      <IonPage>
        <HeaderComp title="Media Server" />
        <IonContent fullscreen>
          <iframe
            className="media-server-view"
            src="http://localhost:8096"
            allowFullScreen={true}
          ></iframe>
        </IonContent>
      </IonPage>
    </>
  );
};
export default MediaServer;
