import {useState} from "react";
import Content  from "./Content";
function Mounter(){
    const [change, setChange] = useState(false)
    return(
        <div>
            <button type="submit" onClick={() => {setChange(!change)}}>toggle</button>
            {change && <Content/>}
            <ul></ul>
        </div>

    )
}

export default Mounter