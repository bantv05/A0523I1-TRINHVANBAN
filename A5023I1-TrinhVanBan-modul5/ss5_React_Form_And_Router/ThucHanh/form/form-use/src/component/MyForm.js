import {useState} from "react";

const MyForm = () =>{
    const [myState, setMyState] = useState('');
    const handleName = (event) =>{
        setMyState(event.target.value)
    }
    let header;

    if(myState){
        header = <h1>Hello:{myState} </h1>
    }else header = '';
    return(
        <div>
            {header}
            <p>Enter your name:</p>
            <input name="ab" type="text"
                onChange={handleName}
            />
        </div>
    );
}

export default MyForm;