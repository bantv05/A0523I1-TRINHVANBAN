import { Link } from "react-router-dom";
import * as Order from "../service/OrderService";
import "../css/List.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Moment from "moment";
import NotFound from "../pages/NotFound";
import Data from "../data/db.json"


function ListOrder() {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [valueI, setValue] = useState('');
    const [input, setInput] = useState('');

    // phân trang;
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 2;
    const lastIndex = recordPerPage * currentPage;
    const firstIndex = lastIndex - recordPerPage;
    const record = Data.orders.slice(lastIndex, firstIndex);
    const npage = Math.ceil(Data.orders.length /recordPerPage);
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
        getAllOrder();
        getAllProduct();
    }, []);

    const handleDelete = async (id, name) => {
        const confirm = window.confirm("Bạn có muốn xóa " + name + " không?");
        if (confirm) {
            await Order.deleteOrder(id);
            getAllOrder();
            toast.success(" Xóa thành công 🤩");
        }
    }

    const calculateTotal = (order) => {
        return order.soLuong * order.product.gia;
    }

    const search = async (valueI, input) => {
        const temp = await Order.searchProduct(valueI, input);
        setOrder(temp);
    }

    const handleSearch = (e) => {
        const {name, value } = e.target;
        if(name === 'input') setInput(value);
        if(name === 'type') setValue(value);
    }
    useEffect(() => {
        search(valueI,input);
    }, [valueI,input]);

    // () phan trang
    const changePrev = () =>{
        if(currentPage !== fi)
    }
    const changeNPage = () =>{

    }
    const changeNext = () =>{

    }
    return (
        <div className="container">
            <div className="content">
                <form style={{ display: "flex" }}>
                    <div>
                        <input name="input" id="input" placeholder="Tìm kiếm loại sản phẩm" onChange={handleSearch} type="text"/>
                        <select
                            style={{ width: 300 }}
                            name="type"
                            onChange={handleSearch}
                        >
                            <option value="">--Select search--</option>
                            {product.map((item, key) => (
                                <option key={key} value={item.name}>{item.name}</option>
                            ))}
                            {/*<button type="submit">Search</button>*/}
                            {/*<button onClick={reset}>Reset</button>*/}
                        </select>
                    </div>
                </form>
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
                                <td>{key + 1}</td>
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