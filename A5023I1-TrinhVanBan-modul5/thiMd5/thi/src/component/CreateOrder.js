import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Order from "../service/OrderService"
import React, {useEffect, useState} from 'react';
import "../css/Create.css"
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-toastify";
import {format} from "date-fns";
function CreateOrder() {
    const [stateOrder, setstateOrder] = useState({
        ngayMua: format(new Date(), 'yyyy-MM-dd'),
        soLuong: '',
        product: ''
    })
    const navigate = useNavigate();
    const validationSchema= {
        ngayMua: Yup.date().required("Khong duoc de trong"),
        soLuong: Yup.number()
            .min(1, "Chất lượng phải ít nhất là 1")
            .required("Chất lượng là bắt buộc"),
        product: Yup.string().required("Danh mục là bắt buộc")
    };
    const [stateProduct, setStateProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect( () => {
        getAllProduct();
    }, []);
    const getAllProduct = async () =>{
        const temp = await Order.getAllProduct();
        setStateProduct(temp);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            values.product = selectedCategory;
            console.log(values.category);
            await Order.saveOrder(values);
            toast.success("Thêm mới thành công 🤩");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Có lỗi xảy ra");
        } finally {
            setSubmitting(false);
        }
    };
    const handleCategoryChange = (event) => {
        const categoryValue = event.target.value;
        try {
            const categoryObject = JSON.parse(categoryValue);//chuyển thành đối tuơng
            setSelectedCategory(categoryObject);
        } catch (error) {
            console.error("Lỗi phân tích chuỗi JSON: ", error);
        }
    };

    return(
        <Formik
            initialValues={stateOrder} onSubmit={handleSubmit} validationSchema={Yup.object(validationSchema)}>
            <div className="container">
                <div className="form">
                    <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight:'700'}}>
                        <h2>Create Product</h2>
                    </div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="soLuong">Số lượng</label>
                            <Field type="number" name="soLuong" placeholder="Enter quality"
                            ></Field>
                            <ErrorMessage className="err" name="soLuong" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="ngayMua">Ngày mua</label>
                            <Field type="date" name="ngayMua" placeholder="Enter quality"
                            ></Field>
                            <ErrorMessage className="err" name="ngayMua" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="product">Category</label>
                            <Field id="product" as="select" name="product" onClick={handleCategoryChange}>
                                <option value= ''>--Select product--</option>
                                {
                                    stateProduct.map(ct => (
                                        <option key={ct.id} value={JSON.stringify(ct)}>{ct.name}</option>
                                    ))}
                            </Field>
                            <ErrorMessage className="err" name="product" component="div"/>
                        </div>

                        <button type="submit">Create</button>
                        <Link to="/"><button className="backbtn">Back</button></Link>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

export default CreateOrder;