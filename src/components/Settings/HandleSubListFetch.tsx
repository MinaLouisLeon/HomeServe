import { useEffect , useState } from "react";
import LightCheckBoxComp from "./LightsCheckBoxComp";
const HandleSubListFetch = (props:any) => {

    const [refresh , setRefresh] = useState(0);
    const [light_item_data , set_light_item_data] = useState(null);

    useEffect(()=>{
        const light_item = props.item;
        const itemObj = {light_item};
        fetch(window.ServerIp + '/setting-fetch-enable',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(itemObj)
        }).then((res) => {return res.json()})
        .then((data:any) => {set_light_item_data(data);console.log(data)})
    },[refresh])

    return(<>
        {light_item_data && <LightCheckBoxComp light_item_data={light_item_data} setRefresh={setRefresh} />}
    </>)
}
export default HandleSubListFetch;