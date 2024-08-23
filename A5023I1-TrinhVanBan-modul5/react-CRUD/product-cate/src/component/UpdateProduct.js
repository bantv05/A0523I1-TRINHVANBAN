import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../css/Create.css";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import * as productService from "../service/ProductService";
import {getByIdProduct} from "../service/ProductService";

function UpdateProduct() {
    const { id } = useParams();
    const [stateCate, setStateCate] = useState([]);
    const navigate = useNavigate();
    // const [product, setProduct] = useState({
    //     name: '',
    //     quality: '',
    //     color: '',
    //     describe: '',
    //     category: ''
    // });
    const [productData, setProductData] = useState([])
    const validationSchema = Yup.object({
        name: Yup.string().required("Tên sản phẩm là bắt buộc"),
        quality: Yup.number()
            .min(1, "Chất lượng phải ít nhất là 1")
            .required("Chất lượng là bắt buộc"),
        color: Yup.string().required("Màu sắc là bắt buộc"),
        describe: Yup.string().required("Mô tả là bắt buộc"),
        category: Yup.string().required("Danh mục là bắt buộc")
    });

    const getByIdProduct = async () => {
        const product = await productService.getByIdProduct(id);
        setProductData(product);
    };

    useEffect(() => {
        const fetchData = async () => {
            await getByIdProduct();
            await getCategory();
        };
        fetchData();
    }, [id]);

    const getCategory = async () => {
        const temp = await productService.getAllCates();
        setStateCate(temp);
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            values.category = JSON.parse(values.category);
            await productService.updateProduct(id, values)
            toast.success("🔥 Cập nhật thành công");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Có lỗi xảy ra");
        } finally {
            setSubmitting(false);
        }
    };

    const handleCategoryChange = (event, setFieldValue) => {
        const categoryValue = event.target.value;
        try {
            const categoryObject = JSON.parse(categoryValue); // Chuyển thành đối tượng
            setFieldValue("category", categoryObject);
        } catch (error) {
            console.error("Lỗi phân tích chuỗi JSON: ", error);
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={productData}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
                <div className="container">
                    <div className="form">
                        <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight: '700' }}>
                            <h2>Update Product</h2>
                        </div>
                        <Form>
                            <Field type="hidden" name="id" value={productData.id} />
                            <div className="form-group">
                                <label htmlFor="name">Name Product</label>
                                <Field name="name" placeholder="Enter name product" value={productData.name}
                                onChange={e => setProductData({...productData, name: e.target.value})}
                                />
                                <ErrorMessage className="err" name="name" component="div" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quality">Quality</label>
                                <Field type="number" name="quality" placeholder="Enter quality" value={productData.quality}
                                       onChange={e => setProductData({...productData, quality: e.target.value})}
                                />
                                <ErrorMessage className="err" name="quality" component="div" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <Field id="color" name="color" placeholder="Enter color" value={productData.color}
                                       onChange={e => setProductData({...productData, color: e.target.value})}
                                />
                                <ErrorMessage className="err" name="color" component="div" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="describe">Describe</label>
                                <Field id="describe" name="describe" placeholder="Enter describe" value={productData.describe}
                                       onChange={e => setProductData({...productData, describe: e.target.value})}
                                />
                                <ErrorMessage className="err" name="describe" component="div" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <Field
                                    id="category"
                                    as="select"
                                    name="category"
                                    onClick={handleCategoryChange}
                                    onChange={e => setProductData({...productData, category: e.target.value})}
                                >
                                    <option value="">--Select option--</option>
                                    {
                                        stateCate.map(ct => (
                                            <option key={ct.id} value={JSON.stringify(ct)}>{ct.name}</option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage className="err" name="category" component="div" />
                            </div>
                            <button type="submit">Update</button>
                            <Link to="/"><button type="button" className="backbtn">Back</button></Link>
                        </Form>
                    </div>
                </div>
        </Formik>
    );
}

export default UpdateProduct;
