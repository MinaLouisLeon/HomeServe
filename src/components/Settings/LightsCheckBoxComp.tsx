import { IonCheckbox, IonItem, IonLabel } from "@ionic/react";
import "./SubLightsSettingsView.css";
const LightCheckBoxComp = (props: any) => {
  //props light_item_data ==> mapped
  // & setRefresh


  return (
    <>
      {props.light_item_data.map((data: any) => {
        return (
          <>
            <div className="settings shadow-2">
              <IonItem lines="none">
                <IonLabel>Enable {data.light_item} </IonLabel>
                <IonCheckbox color="success" slot="start" checked={data.enable}></IonCheckbox>
              </IonItem>
            </div>
          </>
        );
      })}
    </>
  );
};
export default LightCheckBoxComp;
