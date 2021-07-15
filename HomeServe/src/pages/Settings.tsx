import { IonPage , IonContent, IonLabel} from "@ionic/react";
import HeaderComp from "../components/HeaderComp";
import '../App.css'
import { useHistory } from "react-router";

const Settings = () => {

    const history = useHistory();

    return(<>
        <IonPage>
            <HeaderComp title='Settings' />
            <IonContent fullscreen>
                <div className="settings-style">
                    <br></br>
                <button className="btn-grad-settings" onClick={() => {history.push('/lights/settings')}}>
                    <IonLabel>
                        Lights
                    </IonLabel>
                </button>
                </div>
            </IonContent>
        </IonPage>
    </>)
}
export default Settings;