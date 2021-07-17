import { IonIcon, IonLabel } from "@ionic/react";
import { bulb ,settings} from "ionicons/icons";
import "./LightsList.css";
import { useHistory } from "react-router";
const SubLightsList = (props: any) => {
  //props list  ==> list to be mapped
  // & setRefresh ==> returned random from server to rerender
  // & value ==> {show or setting} switch between setting and normal lightList

  const history = useHistory();

  const ShowOrSettings = () => {
    //fn to check if to show content or show settings
    if (props.value === "show") {
      return (
        <>
          {props.list.map((listItem: any) => {
            return (
              <>
                {handleCheckEnable(
                  listItem.id,
                  listItem.status,
                  listItem.sub_light_item,
                  listItem.enable,
                  listItem.icon_status
                )}
              </>
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
                <button className="btn-grad" 
                onClick={() => {history.push("/sublights/" + listItem.light_item + "/settings/" + listItem.sub_light_item + "/" + listItem.id)}}>
                  <IonLabel>{listItem.sub_light_item}</IonLabel>
                  <IonIcon icon={settings} className={listItem.icon_status} />
                </button>
              </>
            );
          })}
        </>
      );
    }
  };

  //Light page
  const handleCheckEnable = (
    id: number,
    status: boolean,
    subItem: string,
    enable: boolean,
    iconStatus: string
  ) => {
    if (enable === true) {
      return (
        <>
          <button
            className="btn-grad"
            onClick={() => {
              handleToggle(id, status);
            }}
          >
            <IonLabel>{subItem}</IonLabel>
            <IonIcon icon={bulb} className={iconStatus} />
          </button>
        </>
      );
    }
  };

  //toogle lights
  const handleToggle = (id: number, status: boolean) => {
    const sub_light_status = status ? false : true;
    const sub_light_iconStatus = status ? "iconLightsOff" : "iconLightsOn";
    const sub_light_status_obj = { id, sub_light_status, sub_light_iconStatus };
    fetch(window.ServerIp + "/toggle-sublight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sub_light_status_obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        console.log("fetcg data");
        console.log(data);
        props.setRefresh(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
export default SubLightsList;
