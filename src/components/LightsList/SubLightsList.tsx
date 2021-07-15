import { IonIcon, IonLabel } from "@ionic/react"
import {bulb} from 'ionicons/icons'
import './LightsList.css'
const SubLightsList = (props:any) => {
    //props list & value

    const handleSettings = (item:string,enable:boolean,status:boolean) => {
        if(props.value === "show"){
            return(<>
                {handleCheckEnable(item,enable,status)}
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

    const handleToggle = (item:string,status:boolean) => {
        if (status){
            console.log(true)
        }else{
            console.log(false)
        }
    }

    const handleCheckEnable = (item:string,enable:boolean,status:boolean) => {
        if (enable === true){
            return(<>
                <button className="btn-grad" onClick={()=> {handleToggle(item,status)}}>
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
                    {handleSettings(listItem.sub_light_item,listItem.enable,listItem.status)}
                </>)
            })}
        </div>
    </>)
}
export default SubLightsList;