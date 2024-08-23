import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const handleCount = ()=>{
        const newValue = count + 1;
        setCount(newValue);
    }

    return(
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleCount}>Change</button>
        </div>
    )
}

export default Counter;