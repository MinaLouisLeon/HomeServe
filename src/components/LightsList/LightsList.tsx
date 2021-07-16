import { IonLabel } from "@ionic/react"
import { useHistory } from "react-router"
import './LightsList.css'
const LightsList = (props:any) => {
    //props list & value
    const history = useHistory();

    const handleCheckEnable = (item:String,enable:boolean) => {
        if(enable === true){
            return(<>
                <button className="btn-grad"  onClick={() => {history.push('/sublights/' + item )}}>
                    <IonLabel>
                        {item}
                    </IonLabel>
                </button>
            </>)
        }
    }

    return(<>
        <div className="main-light-list-style ">
            <br></br>
            {props.list.map((listItem:any) => {
                return(<>
                    {handleCheckEnable(listItem.light_item,listItem.enable)}
                </>)
            })}
        </div>
    </>)
}
export default LightsList;