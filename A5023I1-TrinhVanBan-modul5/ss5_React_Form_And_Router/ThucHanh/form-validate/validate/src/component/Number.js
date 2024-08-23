import {useState} from "react";

const Number = () =>{
    const [state, setState]  = useState({
        username: '',
        age: null
    })

    const Changehandle = (e) =>{
        let name = e.target.name;
        let val = e.target.value;

        if(name === "age"){
            if(!Number(val)){
                alert("Mời bạn nhập số");
            }
        }
        setState({ ...state, [name]: val })
    }

    const handleSubmission = (event) => {

    }
    return(
        <div>
            <form onSubmit={handleSubmission}>
                <h1>Hello {state.username}  {state.age}</h1>
                <p>Nhập tên</p>
                <input type="text" name="username" onChange={Changehandle}/>
                <p>Nhập tuổi</p>
                <input type="text" name="age" onChange={Changehandle}/>
            </form>
        </div>
    );
}

export default Number;