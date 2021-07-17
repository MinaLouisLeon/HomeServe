import { IonButton, IonCheckbox, IonInput, IonItem, IonLabel } from "@ionic/react"
import './SubLightsSettingsView.css'

const SubLightsSettingsView = (props:any) => {

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return(<>
        <form onSubmit={handleSubmit}>
            <br></br>
            <div className="form-container">
            <div className="tc shadow-2 form-inner-container">
                <IonItem  lines="none">
                    <IonLabel>
                        Change Light Name :
                    </IonLabel>
                </IonItem>
                <IonItem  lines="full">
                <input></input>
                </IonItem>
                <IonItem lines="full">
                    <IonLabel>Enable or Disable View</IonLabel>
                    <IonCheckbox  color="success" slot="start"/>
                </IonItem>
                <br></br>
                <br></br>
                <IonButton type="submit" color="success">Set</IonButton>
            </div>
            </div>
        </form>
    </>)
}
export default SubLightsSettingsView;