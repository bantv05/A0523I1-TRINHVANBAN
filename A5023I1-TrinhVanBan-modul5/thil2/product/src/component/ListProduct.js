import {Link} from "react-router-dom";
import * as Oder from "../service/OrderService"
import "../css/List.css"
import {useEffect, useState} from "react";
import * as Order from "../service/OrderService"
import {toast} from "react-toastify";
import Moment from "moment"
import NotFound from "../pages/NotFound";
function ListProduct(){
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [records, setRecords] = useState(order);
    const [selectedProduct, setSelectedProduct] = useState("");

    const getAllOrder = async () => {
        const temp = await Order.getAllOrder();
        setOrder(temp);
        setRecords(temp);
    }

    const getAllProduct = async () => {
        const temp = await Order.getAllProduct();
        setProduct(temp);
    }

    useEffect(() => {
        getAllOrder();
    }, []);
    useEffect(() => {
        getAllProduct();
    }, []);
    const Filter = (event) => {
        setRecords(order.filter(f => f.product.name.toLowerCase().includes(event.target.value)))
    }

    const handleDelete = async (id, name) =>{
        const confirm = window.confirm("Bạn có muốn xóa "+name+" không?");
        if(confirm){
            await Order.deleteOrder(id);
            setOrder(prevState => prevState.filter(product => product.id !== id));
            toast.success("👌 Xóa thành công");
        }
    }
    const handleChange = (order) =>{
            return order.soLuong * order.product.gia;
    }

    const handleSearch = (e) => {
        setSelectedProduct(e.target.value);
        setRecords(order.filter(f => f.product.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    let stt = 1;
    return(
        <div className="container">
            <div className="content">
                <input placeholder="Enter search term" aria-label="Enter search term" onChange={Filter}/>
                <select style={{width: 300}} name="" id="" onChange={handleSearch} value={selectedProduct}>
                    <option value="">--Select search--</option>
                        {
                            product.map(item => (
                                <option id={item.maSp} value={item.name}>{item.name}</option>
                            ))
                        }
                </select>
                <h1 className="title">List Product</h1>
                <div className="btnAddn">
                    <Link to="/create" className="btnAdd">Add+</Link>
                </div>
                <table>
                    <thead>
                    <tr className="row">
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Tên sản phẩm</th>
                        <th>Ngày mua</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Loại sản phẩm</th>
                        <th>Tổng tiền</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        records.length > 0 ? (
                            <>
                                {records.map((order, key) => (
                                    <tr key={key}>
                                        <td>{stt++}</td>
                                        <td>{order.id}</td>
                                        <td>{order.product.name}</td>
                                        <td>{Moment(order.ngayMua).format("DD/MM/yyyy")}</td>
                                        <td>{order.product.gia}</td>
                                        <td>{order.soLuong}</td>
                                        <td>{order.product.lsp}</td>
                                        <td>{handleChange(order)}</td>
                                        <td className="button">
                                            <Link to={`/update/`+ order.id}>
                                                <button className="btn2">Update</button>
                                            </Link>
                                            <button onClick={(e) => handleDelete(order.id, order.product.name)} className="btn3">Delete</button>
                                        </td>
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