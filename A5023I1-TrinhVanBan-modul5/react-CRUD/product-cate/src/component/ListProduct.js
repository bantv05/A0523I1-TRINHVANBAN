import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import "../css/List.css"
import * as productService from "../service/ProductService"
import {toast} from "react-toastify";
function ListProduct() {
    const [stateProduct, setStateProduct] = useState([]);
    const [records, setRecords] = useState(stateProduct);
    const navigate = useNavigate()
    const getAllProduct = async ()=> {
        const temp =  await productService.getAllProducts();
        setStateProduct(temp);
        setRecords(temp);
    };
    useEffect(() => {
        getAllProduct();
    }, []);

    const handleDelete = async (id, name) =>{
        const confirm = window.confirm("Bạn có muốn xóa "+name+" không?");
        if(confirm){
            await productService.deleteProduct(id);
            setStateProduct(prevState => prevState.filter(product => product.id !== id));
            toast.success("👌 Xóa thành công");
        }
    }

    const Filter = (event) => {
        setRecords(stateProduct.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    return (
        <div className="container">
            <div className="content">
                <input style={{padding: 15}} type="text" placeholder="Nhập tên cần tìm kiếm" onChange={Filter}/>
                <h1 className="title">List Product</h1>
                <div className="btnAddn">
                    <Link to="/create" className="btnAdd">Add+</Link>
                </div>
                <table>
                    <thead>
                    <tr className="row">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quality</th>
                        <th>Color</th>
                        <th>Describe</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((product, key) => (
                        <tr key={key}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quality}</td>
                            <td>{product.color}</td>
                            <td>{product.describe}</td>
                            <td>{product.category.name}</td>
                            <td className="button">
                                <Link to={`/read/`+ product.id}>
                                    <button className="btn1">Read</button>
                                </Link>
                                <Link to={`/update/`+ product.id}>
                                    <button className="btn2">Update</button>
                                </Link>
                                <button onClick={(e) => handleDelete(product.id, product.name)} className="btn3">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default ListProduct;