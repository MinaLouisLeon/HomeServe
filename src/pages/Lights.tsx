import { IonPage , IonContent} from "@ionic/react";
import HeaderComp from "../components/HeaderComp";
import { useEffect , useState} from "react";
import LightsList from "../components/LightsList/LightsList";
import '../App.css'
import { useHistory ,useParams} from "react-router";
import { error } from "console";
const Lights = () => {

    const [list , setList] = useState(null);
    const history = useHistory();
    const {value} = useParams<{value?: string}>();


    useEffect(()=>{
        console.log(value)
        fetch( window.ServerIp + '/lights')
      .then((res) => {return res.json()})
      .then((data:any) => {setList(data);console.log(data)})
      .catch((error) => {console.log(error)})
  },[])

    return(<>
    <IonPage>
      <HeaderComp title="Lights" />
      <IonContent className="lights-content-style" fullscreen>
      {list && <LightsList list={list} value={value}/>}
      </IonContent>
    </IonPage>
    </>)
}
export default Lights;