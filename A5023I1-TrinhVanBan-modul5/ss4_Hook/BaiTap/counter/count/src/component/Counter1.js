import {useState, useEffect} from "react";

function Counter1(){
    const [count, setCount] = useState(0);
        const handleClick = () =>{
            setCount((count => count + 1))
        }
    return(
        <div>
            <h2>counter 1:{count}</h2>
            <button type="submit"
                onClick={handleClick}
            >Add1</button>
        </div>
    );
}
export default Counter1;