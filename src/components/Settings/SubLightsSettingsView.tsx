import { IonButton, IonCheckbox, IonItem, IonLabel } from "@ionic/react";
import "./SubLightsSettingsView.css";
import { useState } from "react";
import { useHistory } from "react-router";

const SubLightsSettingsView = (props: any) => {
  //props settingsValues ==> mapped
  // & item & value ==> location for back button
  console.log(props.settingsValues);

  const [sub_light_item, setSubLightItem] = useState("");
  
  const history = useHistory();

  const handleSubmit = () => {
    
    if (sub_light_item !== "") {
        const id = props.id;
        const subLightItemObj = {id,sub_light_item}
      fetch(window.ServerIp + '/subitem-name',{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(subLightItemObj)
      }).then((res) => {return res.json()})
      .then((data:any) => {props.setRefresh(data)})
      .catch((err) => console.log(err))
    }
  };
  // TODO: refresh pages to show new name
  const handleCheckBox = (enableValue:boolean) => {
    //   const enable = e.detail.checked;
      const id = props.id;
        const enable = enableValue ? false : true;
        console.log("enable : " + enable)
      const enableObj = {id,enable};
      console.log("item click")
    fetch( window.ServerIp + '/setChecked',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(enableObj)
    }).then((res) => {return res.json()})
    .then((data:any) => {props.setRefresh(data)})
    .catch((err) => console.log(err))
  };
  
  return (
    <>
      {props.settingsValues.map((settingsList: any) => {
        return (
          <>
            <br></br>
            <div className="form-container">
              <div className="tc shadow-2 form-inner-container">
                <IonItem lines="none">
                  <IonLabel>Change Light Name :</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <input
                    value={sub_light_item}
                    type="text"
                    onChange={(e) => {
                      setSubLightItem(e.target.value);
                    }}
                  ></input>
                  <IonButton
                    slot="end"
                    color="success"
                    onClick={() => handleSubmit()}
                  >
                    Set
                  </IonButton>
                </IonItem>
                <IonItem lines="full" button onClick={() => handleCheckBox(settingsList.enable)}>
                  <IonLabel>Enable or Disable View</IonLabel>
                  <IonCheckbox
                    color="success"
                    slot="start"
                    checked={settingsList.enable}
                  />
                </IonItem>
                <IonButton
                  color="tertiary"
                  onClick={() => {
                    setSubLightItem("");
                    history.push(
                      "/sublights/" + props.item + "/" + props.value
                    );
                  }}
                >
                  Back
                </IonButton>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default SubLightsSettingsView;
