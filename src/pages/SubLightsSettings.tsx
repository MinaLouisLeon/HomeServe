import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import { useEffect , useState} from "react";
import HeaderComp from "../components/HeaderComp";
import SubLightsSettingsView from "../components/Settings/SubLightsSettingsView";
import "../App.css";
const SubLightsSettings = () => {

    const {item} = useParams<{item?: string}>();
    const {value} = useParams<{value?: string}>();
    const {subitem} = useParams<{subitem?: string}>();
    const {id} = useParams<{id?: string}>();
    const [settingsValues , setSettingsValues] = useState(null);

    useEffect(() => {
        const sublight_setting_obj = {id}
        fetch( window.ServerIp + "/fetch-sublight-settings",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(sublight_setting_obj)
        }).then((res) => {return res.json()})
        .then((data:any) => setSettingsValues(data))
        .catch((err) => console.log(err))
    },[])

    return(<>
        <IonPage>
            <HeaderComp title={subitem} btnValue="back" 
            urlLocation={"/sublights/" + item + "/" + value}
            />            
            <IonContent fullscreen>
            <SubLightsSettingsView />
            </IonContent>
        </IonPage>
    </>)
}
export default SubLightsSettings;