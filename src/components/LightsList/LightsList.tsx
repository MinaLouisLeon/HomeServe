import { IonList,IonItem,IonLabel } from "@ionic/react"
import { useHistory } from "react-router"
import './LightsList.css'
const LightsList = (props:any) => {

    const history = useHistory();

    return(<>
        <div className="main-light-list-style ">
            <br></br>
            {props.list.map((listItem:any) => {
                return(<>
                    <button className="btn-grad"  onClick={() => {history.push('/sublights/' + listItem.light_item)}}>
                        <IonLabel>
                            {listItem.light_item}
                        </IonLabel>
                    </button>
                </>)
            })}
        </div>
    </>)
}
export default LightsList;