import { Link } from "react-router-dom";
import * as Order from "../service/OrderService";
import "../css/List.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Moment from "moment";
import NotFound from "../pages/NotFound";
import axios from "axios";


function ListOrder() {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [valueI, setValue] = useState('');
    const [input, setInput] = useState('');

    // phân trang;
    const [currentPage, setCurrentPage] = useState(1);//trang đầu tiên
    const recordPerPage = 5;
    const lastIndex = recordPerPage * currentPage;
    const firstIndex = lastIndex - recordPerPage;
    const record = order.slice(firstIndex, lastIndex);
    const npage = Math.ceil(order.length /recordPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const getAllOrder = async () => {
        const temp = await Order.getAllOrder();
        setOrder(temp);
    }
    const getAllProduct = async () => {
        const temp = await Order.getAllProduct();
        setProduct(temp);
    }

    useEffect(() => {
        getAllProduct();
    }, []);
    useEffect(() => {
        getAllOrder();
    }, []);

    const handleDelete = async (id, name) => {
        const confirm = window.confirm("Bạn có muốn xóa " + name + " không?");
        if (confirm) {
            await Order.deleteOrder(id);
            getAllOrder();
            toast.success("Xóa thành công 🤩");
        }
    }

    const calculateTotal = (order) => {
        return order.soLuong * order.product.gia;
    }

    const search = async (type, value) => {
        const temp = await Order.searchProduct(type, value);
        setOrder(temp);
    }

    const handleSearch = (e) => {
        const {name, value } = e.target;
        if(name === 'input') setInput(value);
        if(name === 'type') setValue(value);
    }

    // useEffect(() => {
    //         search(valueI, input);
    // }, [valueI, input]);

    // () phan trang
    const changePrev = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    const changeNPage = (id) =>{
        setCurrentPage(id);
    }
    const changeNext = () =>{
        if(currentPage < npage){
            setCurrentPage(currentPage + 1);
        }
    }

    const top10Product = async () =>{
        const temp = await Order.limitTop10();
        setOrder(temp);
    }
    const onsubmit = (e) =>{
        e.preventDefault();
        search(valueI, input);
    }

    const reset = () =>{
        getAllOrder();
    }
    return (
        <div className="container">
            <div className="content">
                <form style={{ display: "flex" }}>
                    <div>
                        <input name="input" id="input" placeholder="Tìm kiếm mã sản phẩm"
                               onChange={handleSearch}
                               type="text"/>
                        < select
                            style={{ width: 300 }}
                            name="type"
                            onChange={handleSearch}
                        >
                            <option value="">--Select search--</option>
                            {product.map((item, key) => (
                                <option key={key} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button onClick={onsubmit}>Search</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </form>
                <input name="top10" style={{width:150, background:"green", color:"white"}} onClick={top10Product} type="button" value="Product top 5"/>
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
                    {record.length > 0 ? (
                        record.map((order, key) => (
                            <tr key={key}>
                                <td>{firstIndex + key + 1}</td>
                                <td>{order.id}</td>
                                <td>{order.product.name}</td>
                                <td>{Moment(order.ngayMua).format("DD-MM-yyyy")}</td>
                                <td>{order.product.gia}</td>
                                <td>{order.soLuong}</td>
                                <td>{order.product.lsp}</td>
                                <td>{calculateTotal(order)}</td>
                                <td className="button">
                                    <button onClick={() => handleDelete(order.id, order.product.name)} className="btn3">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">
                                <NotFound />
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <nav>
                    <ul>
                        <li className='page-item'>
                            <a className='page-link' href='#' onClick={changePrev}>Prev</a>
                        </li>
                        {
                            numbers.map((n, i) =>(
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a className='page-link' href="#" onClick={() => changeNPage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a className='page-link' href="#" onClick={changeNext}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ListOrder;