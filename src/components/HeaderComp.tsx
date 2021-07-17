import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import "../App.css";
const HeaderComp = (props: any) => {
  // props title & btnValue & urlLocation
  const history = useHistory();
  const handleButton = () => {
    if (props.btnValue === "back") {
      return (
        <>
          <IonButtons slot="start">
            <IonButton
              className="header-txt-color"
              onClick={() => {
                history.push(props.urlLocation);
              }}
            >
              Back
            </IonButton>
          </IonButtons>
        </>
      );
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar color="tertiary" mode="ios">
          <IonTitle className="header-txt-color">{props.title}</IonTitle>
          {handleButton()}
        </IonToolbar>
      </IonHeader>
    </>
  );
};
export default HeaderComp;
