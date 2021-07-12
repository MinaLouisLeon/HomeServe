import { IonContent, IonPage } from '@ionic/react'
import HeaderComp from '../components/HeaderComp'
import { useParams } from 'react-router'
import '../App.css'
const SubLights = () => {

    const {item} = useParams<{item?: string}>();

    return(<>
        <IonPage>
            <HeaderComp title={item} btnValue="back" urlLocation="/lights"/>
            <IonContent fullscreen ></IonContent>
        </IonPage>
    </>)
}
export default SubLights