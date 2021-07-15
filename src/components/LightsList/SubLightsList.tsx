import { IonIcon, IonLabel } from "@ionic/react"
import {bulb} from 'ionicons/icons'
import './LightsList.css'
import { useState } from "react"
const SubLightsList = (props:any) => {
    //props list & value & setSubLightList

    const [list , setList] = useState(props.list);
    console.log("restart")
    console.log(list)
    //setting page
    const handleSettings = (id:number,item:string,subItem:string,enable:boolean,status:boolean,iconStatus:string) => {
        if(props.value === "show"){
            return(<>
                {handleCheckEnable(id,item,subItem,enable,status,iconStatus)}
            </>)
        }
        else if(props.value === "settings"){
            return(<>
                <button className="btn-grad">
                   <IonLabel>
                        {subItem}
                    </IonLabel>
                    <IonIcon icon={bulb}/>
                </button>
            </>)
        }
    }


    //Light page
    const handleCheckEnable = (id:number,item:string,subItem:string,enable:boolean,status:boolean,iconStatus:string) => {
        if (enable === true){
            return(<>
                <button className="btn-grad" onClick={()=> {handleToggle(id,item,status)}}>
                   <IonLabel>
                        {subItem}
                    </IonLabel>
                    <IonIcon icon={bulb} className={iconStatus}/>
                </button>
            </>)
        }
    }
    
    //toogle lights
    const handleToggle = (id:number,item:string,status:boolean) => {
        console.log(status);
        const sub_light_status = status ? false : true;
        const sub_light_iconStatus = status ? "iconLightsOff" : "iconLightsOn";
        const sub_light_status_obj = {id,item,sub_light_status,sub_light_iconStatus};
        fetch(window.ServerIp + '/toggle-sublight',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(sub_light_status_obj)
        }).then((res) => {return res.json()})
        .then((data:any) => {setList(data);console.log("fetch");console.log(list);})
        .catch((err) => {console.log(err)})
    }

    return(<>
        <div className="main-light-list-style ">
            <br></br>

            {/* TODO: force rerender */}
            {list.map((listItem:any) => {
                return(<>
                    {handleSettings(listItem.id,listItem.light_item,listItem.sub_light_item,listItem.enable,listItem.status,listItem.icon_status)}
                </>)
            })}
        </div>
    </>)
}
export default SubLightsList;