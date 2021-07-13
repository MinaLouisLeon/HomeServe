import { IonContent, IonPage } from '@ionic/react'
import HeaderComp from '../components/HeaderComp'
import SubLightsList from '../components/LightsList/SubLightsList'
import { useHistory, useParams } from 'react-router'
import { useEffect , useState } from 'react'
import '../App.css'
const SubLights = () => {

    const {item} = useParams<{item?: string}>();
    const [subLightList , setSubLightList] = useState(null);
    const history = useHistory();

    useEffect(()=>{
        console.log("useEffect")
        const light_item_obj = {item}
        fetch(window.ServerIp + '/sublights',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(light_item_obj)
        }).then((res) => {return res.json()})
        .then((data:any) => {setSubLightList(data)})
    },[])

    return(<>
        <IonPage>
            <HeaderComp title={item} btnValue="back" urlLocation="/lights"/>
            <IonContent fullscreen >
                {subLightList && <SubLightsList list={subLightList} />}
            </IonContent>
        </IonPage>
    </>)
}
export default SubLights