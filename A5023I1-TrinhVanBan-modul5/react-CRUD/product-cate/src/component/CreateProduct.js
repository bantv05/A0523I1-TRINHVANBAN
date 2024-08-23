import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import "../css/Create.css"
import * as Yup from 'yup';
import axios from "axios";
import {toast} from "react-toastify";
import * as productService from "../service/ProductService"
//rsf
function CreateProduct() {
    const [stateProduct, setStateProduct] = useState({
        id:'',
        name:'',
        quality: '',
        color:'',
        describe: '',
        category:''
    })
    const navigate = useNavigate();
    const [stateCate, setStateCate] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');

    const validationSchema= {
        name: Yup.string().required("Tên sản phẩm là bắt buộc"),
        quality: Yup.number()
            .min(1, "Chất lượng phải ít nhất là 1")
            .required("Chất lượng là bắt buộc"),
        color: Yup.string().required("Màu sắc là bắt buộc"),
        describe: Yup.string().required("Mô tả là bắt buộc"),
        category: Yup.string().required("Danh mục là bắt buộc")
    };

    useEffect(() => {
        getCategory();
    }, []);
    const getCategory = async () => {
        const temp = await productService.getAllCates();
        setStateCate(temp);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            values.category = selectedCategory;
            console.log(values.category);
            await productService.saveProduct(values);
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
        try {
            const categoryObject = JSON.parse(categoryValue);//chuyển thành đối tuơng
            setSelectedCategory(categoryObject);
        } catch (error) {
            console.error("Lỗi phân tích chuỗi JSON: ", error);
        }
    };

    return (
        <Formik
            initialValues={stateProduct} onSubmit={handleSubmit} validationSchema={Yup.object(validationSchema)}>
            <div className="container">
                <div className="form">
                    <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight:'700'}}>
                        <h2>Create Product</h2>
                    </div>
                    <Form>
                        <Field type="hidden" name="id" value={stateProduct.id}/>
                        <div className="form-group">
                            <label htmlFor="name">Name Product</label>
                            <Field name="name" placeholder="Enter name product"/>
                            <ErrorMessage className="err" name="name" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quality">Quality</label>
                            <Field type="number" name="quality" placeholder="Enter quality"
                            ></Field>
                            <ErrorMessage className="err" name="quality" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="color">Color</label>
                            <Field id="color" name="color" placeholder="Enter color"></Field>
                            <ErrorMessage className="err" name="color" component="div"></ErrorMessage>
                        </div>

                        <div className="form-group">
                            <label htmlFor="describe">Describe</label>
                            <Field id="describe" name="describe" placeholder="Enter describe" ></Field>
                        <ErrorMessage className="err" name="describe" component="div"></ErrorMessage>
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <Field id="category" as="select" name="category" onClick={handleCategoryChange}>
                                <option value= ''>--Select category--</option>
                                {
                                    stateCate.map(ct => (
                                        <option key={ct.id} value={JSON.stringify(ct)}>{ct.name}</option>
                                    ))}
                            </Field>


                            <ErrorMessage className="err" name="category" component="div"></ErrorMessage>
                        </div>
                        <button type="submit">Create</button>
                        <Link to="/"><button className="backbtn">Back</button></Link>
                    </Form>
                </div>
            </div>
        </Formik>
    );
}

export default CreateProduct;