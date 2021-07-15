import { IonContent, IonPage } from '@ionic/react'
import HeaderComp from '../components/HeaderComp'
import SubLightsList from '../components/LightsList/SubLightsList'
import { useHistory, useParams } from 'react-router'
import { useEffect , useState } from 'react'
import '../App.css'
const SubLights = () => {

    const {item} = useParams<{item?: string}>();
    const {value} = useParams<{value?: string}>();
    const [subLightList , setSubLightList] = useState(null);

    useEffect(()=>{
        console.log("useEffect")
        const light_item_obj = {item}
        setSubLightList(null);
        fetch(window.ServerIp + '/sublights',{
            method: "POST", 
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(light_item_obj)
        }).then((res) => {return res.json()})
        .then((data:any) => {setSubLightList(data);console.log(data)})
        .catch((err) => console.log(err))
    },[item])


    return(<>
        <IonPage>
            <HeaderComp title={item} btnValue="back" urlLocation={"/lights/" + value}/>
            <IonContent fullscreen >
                {subLightList && <SubLightsList list={subLightList} value={value} setSubLightList={setSubLightList}/>}
            </IonContent>
        </IonPage>
    </>)
}
export default SubLights