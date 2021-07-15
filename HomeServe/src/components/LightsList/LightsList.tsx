import { IonLabel } from "@ionic/react"
import { useHistory } from "react-router"
import './LightsList.css'
const LightsList = (props:any) => {
    //props list & value
    const history = useHistory();

    const handleSettings = (item:String,enable:boolean) => {
        if(props.value === "show"){
            return(<>
                {handleCheckEnable(item,enable)}
            </>)
        }
        else if (props.value === "settings"){
            return(<>
                <button className="btn-grad"  onClick={() => {history.push('/sublights/' + item + "/settings")}}>
                    <IonLabel>
                        {item}
                    </IonLabel>
                </button>
            </>)
        }
    }

    const handleCheckEnable = (item:String,enable:boolean) => {
        if(enable === true){
            return(<>
                <button className="btn-grad"  onClick={() => {history.push('/sublights/' + item + '/show')}}>
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
                    {handleSettings(listItem.light_item,listItem.enable)}
                </>)
            })}
        </div>
    </>)
}
export default LightsList;