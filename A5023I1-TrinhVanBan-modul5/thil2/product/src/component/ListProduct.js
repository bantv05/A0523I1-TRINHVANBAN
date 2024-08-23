import {Link} from "react-router-dom";
import "../css/List.css"
import {useEffect, useState} from "react";
import * as Product from "../service/ProductService"
import {toast} from "react-toastify";
import Moment from "moment"
import NotFound from "../pages/NotFound";
function ListProduct(){
    const [order, setOrder] = useState([]);
    const [type, setType] = useState([]);
    const [records, setRecords] = useState(order);
    const [selectedProduct, setSelectedProduct] = useState('');

    const getAllProduct = async () => {
        const temp = await Product.getAllProduct();
        await setOrder(temp);
        setRecords(temp);
    }

    const getAllType = async () => {
        const temp = await Product.getAllType();
        setType(temp);
    }

    useEffect(() => {
        getAllProduct();
    }, []);
    useEffect(() => {
        getAllType();
    }, []);
    const Filter = (event) => {
        setRecords(order.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }

    const handleSearch = (e) => {
        setSelectedProduct(e.target.value);
        const temp = order.filter(f => f.name.toLowerCase().includes(e.target.value))
        setRecords(temp)
    }
    let stt = 1;
    return(
        <div className="container">
            <div className="content">
                <div style={{display: "flex"}}>
                    <input style={{width: 200, marginRight: 10}} placeholder="Enter search term" aria-label="Enter search term" onChange={Filter}/>
                    <select style={{width: 300}} onChange={handleSearch} value={selectedProduct}>
                        <option value="">--Select search--</option>
                        {
                            type.map(item => (
                                <option id={item.id} value={item.name}>{item.name}</option>
                            ))
                        }
                    </select>
                    <input style={{width: 100,  marginLeft: 10}} type="button" value="Tìm kiếm"/>
                </div>
                <h1 className="title">List Product</h1>
                <div className="btnAddn">
                    <Link to="/create" className="btnAdd">Add+</Link>
                </div>
                <table>
                    <thead>
                    <tr className="row">
                        <th>STT</th>
                        <th>Code</th>
                        <th>Name product</th>
                        <th>Date</th>
                        <th>Thể loại</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        records.length > 0 ? (
                            <>
                                {records.map((product, key) => (
                                    <tr key={key}>
                                        <td>{stt++}</td>
                                        <td>{product.code}</td>                                        <td>{product.name}</td>
                                        <td>{Moment(product.date).format("DD/MM/yyyy")}</td>
                                        <td>{product.type.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.number}</td>
                                    </tr>
                                ))}
                            </>
                        ):(
                            // <h2>Không có dữ liệu</h2>
                            <div>
                                <NotFound/>
                            </div>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProduct;