import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as Products from "../service/ProductService"
import React, {useEffect, useState} from 'react';
import "../css/Create.css"
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-toastify";
import {format} from "date-fns";
function CreateProduct() {
    const [stateProduct, setstateProduct] = useState({
        code: "",
        name: "",
        price: "",
        number: "",
        date: '',
        description: '',
        type: ''
    })
    const navigate = useNavigate();
    const validationSchema= {
        code: Yup.string().required("Required").matches(/^PROD-\d{4}$/, "Sai định dạng định dạng đúng PROD-XXXX"),
        name: Yup.string().required("Required"),
        price: Yup.number().required("Required"),
        number: Yup.number().required("Required")
            .positive("Số lượng sản phẩm phải là số nguyên lớn hơn 0")
            .integer("Số lượng sản phẩm phải là số nguyên lớn hơn 0")
            .min(1, "Số lượng sản phẩm phải là số nguyên lớn hơn 0"),
        date: Yup.date().required("Required").max(new Date(), "Ngày nhập sản phẩm không được lớn hơn ngày hiện tại"),
        description: Yup.string().required("Required"),
        type: Yup.string().required("Required")
    };
    const [stateType, setStateType] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect( () => {
        getAllType();
    }, []);
    const getAllType = async () =>{
        const temp = await Products.getAllType();
        setStateType(temp);
    }

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            values.type = JSON.parse(selectedCategory);
            await Products.saveProduct(values);
            toast.success("✅ Thêm mới thành công");
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
        setSelectedCategory(categoryValue);
    };

    return(
        <Formik
            initialValues={stateProduct} onSubmit={handleSubmit} validationSchema={Yup.object(validationSchema)}>
            <div className="container">
                <div className="form">
                    <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight:'700'}}>
                        <h2>Create product</h2>
                    </div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="code">Code</label>
                            <Field type="text" name="code" placeholder="Code"
                            ></Field>
                            <ErrorMessage className="err" name="code" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" placeholder="Name"
                            ></Field>
                            <ErrorMessage className="err" name="name" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <Field type="number" name="price" placeholder="Price"
                            ></Field>
                            <ErrorMessage className="err" name="price" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="number">Quality product</label>
                            <Field type="number" name="number" placeholder="Quality product"
                            ></Field>
                            <ErrorMessage className="err" name="number" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date buy</label>
                            <Field type="date" name="date" placeholder="Date buy"
                            ></Field>
                            <ErrorMessage className="err" name="date" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <Field id="type" as="select" name="type" onClick={handleCategoryChange}>
                                <option value= ''>--Select product--</option>
                                {
                                    stateType.map(ct => (
                                        <option key={ct.id} value={JSON.stringify(ct)}>{ct.name}</option>
                                    ))}
                            </Field>
                            <ErrorMessage className="err" name="type" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <Field type="textarea" name="description" placeholder="Enter description"
                            ></Field>
                            <ErrorMessage className="err" name="description" component="div"/>
                        </div>

                        <button type="submit">Create</button>
                        <Link to="/"><button className="backbtn">Back</button></Link>
                    </Form>
                </div>
            </div>
        </Formik>
    )
}

export default CreateProduct;