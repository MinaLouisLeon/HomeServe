import { IonPage , IonContent} from "@ionic/react";
import HeaderComp from "../components/HeaderComp";
import { useEffect , useState} from "react";
import LightsList from "../components/LightsList/LightsList";
import '../App.css'
import { useHistory } from "react-router";
const Lights = () => {

    const [list , setList] = useState(null);
    // const history = useHistory();

    useEffect(()=>{
        fetch( window.ServerIp + '/lights')
        .then((res) => {return res.json()})
        .then((data:any) => {setList(data)})
    },[])


    return(<>
    <IonPage>
      <HeaderComp title="Lights" />
      <IonContent className="lights-content-style" fullscreen>
      {list && <LightsList list={list} />}
      </IonContent>
    </IonPage>
    </>)
}
export default Lights;