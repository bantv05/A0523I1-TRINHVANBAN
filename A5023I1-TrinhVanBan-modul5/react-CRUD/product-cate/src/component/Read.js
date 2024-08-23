import React, {useEffect, useState} from 'react';
import * as productService from "../service/ProductService"
import {Link, useParams} from "react-router-dom";
import "../css/Read.css"

function Read() {
    const {id} = useParams();
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () =>{
        const product = await productService.getAllProducts();
        setProducts(product);
    }
    return (
        <div>
            <div>
                {
                    products.map(val => {
                        if (id === val.id){
                            return(
                                <div className="detail-container">
                                    <h1>Detail</h1>
                                    <h3>Id: <span>{val.id}</span></h3>
                                    <h3>Name: <span>{val.name}</span></h3>
                                    <h3>Quality: <span>{val.quality}</span></h3>
                                    <h3>Color: <span>{val.color}</span></h3>
                                    <h3>Describe: <span>{val.describe}</span></h3>
                                    <h3>Category: <span>{val.category.name}</span></h3>
                                    <Link to={`/update/${val.id}`}>
                                        <button className="btn2">Update</button>
                                    </Link>
                                    <Link to="/">
                                        <button className="btn1">Back</button>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Read;