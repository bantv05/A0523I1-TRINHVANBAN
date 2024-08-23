import {useState, useEffect} from "react";

function Counter2(){
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount((count => count + 2))
    }
    return(
        <div>
            <h2>counter 2:{count}</h2>
            <button type="submit"
                    onClick={handleClick}
            >Add2</button>
        </div>
    );
}
export default Counter2;