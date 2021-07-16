import { IonIcon, IonLabel } from "@ionic/react"
import {bulb} from 'ionicons/icons'
import './LightsList.css'
import { useState } from "react"
const SubLightsList = (props:any) => {
    //props list & value & setSubLightList

    //Light page
    const handleCheckEnable = (subItem:string,enable:boolean,iconStatus:string) => {
        if (enable === true){
            return(<>
                <button className="btn-grad">
                   <IonLabel>
                        {subItem}
                    </IonLabel>
                    <IonIcon icon={bulb} className={iconStatus}/>
                </button>
            </>)
        }
    }
    
    //toogle lights
    // const handleToggle = (id:number,item:string,status:boolean) => {
    //     console.log(status);
    //     const sub_light_status = status ? false : true;
    //     const sub_light_iconStatus = status ? "iconLightsOff" : "iconLightsOn";
    //     const sub_light_status_obj = {id,item,sub_light_status,sub_light_iconStatus};
    //     fetch(window.ServerIp + '/toggle-sublight',{
    //         method: "POST",
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify(sub_light_status_obj)
    //     }).then((res) => {return res.json()})
    //     .then((data:any) => {setList(data);console.log("fetch");console.log(list);})
    //     .catch((err) => {console.log(err)})
    // }

    return(<>
        <div className="main-light-list-style ">
            <br></br>

            {/* TODO: force rerender */}
            {props.list.map((listItem:any) => {
                return(<>
                    {handleCheckEnable(listItem.sub_light_item,listItem.enable,listItem.icon_status)}
                </>)
            })}
        </div>
    </>)
}
export default SubLightsList;