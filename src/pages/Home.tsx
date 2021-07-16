import { IonPage, IonContent } from "@ionic/react";
import HeaderComp from "../components/HeaderComp";
import "../App.css";
const Home = () => {
  return (
    <>
      <IonPage>
        <HeaderComp title="Home" />
        <IonContent fullscreen></IonContent>
      </IonPage>
    </>
  );
};
export default Home;
