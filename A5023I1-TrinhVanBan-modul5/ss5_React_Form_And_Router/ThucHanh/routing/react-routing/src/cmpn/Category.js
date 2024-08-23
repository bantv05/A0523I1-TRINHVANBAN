import {useNavigate} from "react-router-dom";

const Category = () =>{
    let navigate = useNavigate();

    const sendDataToProduct = event =>{
        navigate(`/product/${event.target.value}`);//su dung navigate de điều hướng tới path `/product/${event.target.value}`
    }
    return(
        <div>
            <h2>Select a Category:</h2>
            <select name="car" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>Choose you car</option>
                <option value="1">Volvo</option>
                <option value="2">Mercedes</option>
                <option value="3">Toyota</option>
            </select>
        </div>
    );
}

export default Category;