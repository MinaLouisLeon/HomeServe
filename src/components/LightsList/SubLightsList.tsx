import { IonIcon, IonLabel } from "@ionic/react"
import {bulb} from 'ionicons/icons'
import './LightsList.css'
const SubLightsList = (props:any) => {
    

    return(<>
        <div className="main-light-list-style ">
            <br></br>
            {props.list.map((listItem:any) => {
                return(<>
                    <button className="btn-grad">
                      
                       <IonLabel>
                            {listItem.sub_light_item}
                        </IonLabel>
                        <IonIcon icon={bulb}/>
                      
                    </button>
                    
                </>)
            })}
        </div>
    </>)
}
export default SubLightsList;