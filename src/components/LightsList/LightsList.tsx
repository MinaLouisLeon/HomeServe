import { IonLabel ,IonItem} from "@ionic/react";
import { useHistory } from "react-router";
import "./LightsList.css";

const LightsList = (props: any) => {
  //props list ==> list to be maped
  // & value ==> {show or setting} switch between setting and normal lightList
  const history = useHistory();

  const handleCheckEnable = (item: String, enable: boolean) => {
    //fn to show normal lights if enabled in settings
    if (enable === true) {
      return (
        <>
          <button
            className="btn-grad"
            onClick={() => {
              history.push("/sublights/" + item + "/show");
            }}
          >
            <IonLabel>{item}</IonLabel>
          </button>
        </>
      );
    }
  };

  const ShowOrSettings = () => {
    //fn to check if to show content or show settings
    if (props.value === "show") {
      return (
        <>
          {props.list.map((listItem: any) => {
            return (
              <>{handleCheckEnable(listItem.light_item, listItem.enable)}</>
            );
          })}
        </>
      );
    } else if (props.value === "settings") {
      return (
        <>
          {props.list.map((listItem: any) => {
            return (
              <>
                <button
                  className="btn-grad"
                  onClick={() => {
                    history.push(
                      "/sublights/" + listItem.light_item + "/settings"
                    );
                  }}
                >
                  <IonLabel>{listItem.light_item}</IonLabel>
                </button>
              </>
            );
          })}
        </>
      );
    }
  };

  return (
    <>
      <div className="main-light-list-style ">
        <br></br>
        {ShowOrSettings()}
      </div>
    </>
  );
};
export default LightsList;
