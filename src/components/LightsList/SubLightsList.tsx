import { IonIcon, IonLabel } from "@ionic/react"
import {bulb} from 'ionicons/icons'
import './LightsList.css'
const SubLightsList = (props:any) => {
    //props list & value

    const handleSettings = (item:string,enable:boolean) => {
        if(props.value === "show"){
            return(<>
                {handleCheckEnable(item,enable)}
            </>)
        }
        else if(props.value === "settings"){
            return(<>
                <button className="btn-grad">
                   <IonLabel>
                        {item}
                    </IonLabel>
                    <IonIcon icon={bulb}/>
                </button>
            </>)
        }
    }

    const handleCheckEnable = (item:string,enable:boolean) => {
        if (enable === true){
            return(<>
                <button className="btn-grad">
                   <IonLabel>
                        {item}
                    </IonLabel>
                    <IonIcon icon={bulb}/>
                </button>
            </>)
        }
    }

    return(<>
        <div className="main-light-list-style ">
            <br></br>
            {props.list.map((listItem:any) => {
                return(<>
                    {handleSettings(listItem.sub_light_item,listItem.enable)}
                </>)
            })}
        </div>
    </>)
}
export default SubLightsList;