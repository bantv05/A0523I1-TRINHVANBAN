import {useParams} from "react-router-dom";

const Product = () =>{
    let {categoryId} = useParams();// để lấy categoryId từ URL.
    return(
        <div>
            <h1>Option: {categoryId}</h1>
        </div>
    )
}

export default Product;