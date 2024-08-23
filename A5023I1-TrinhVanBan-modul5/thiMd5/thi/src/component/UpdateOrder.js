// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import "../css/Create.css";
// import * as Yup from 'yup';
// import { toast } from "react-toastify";
// import * as Order from "../service/OrderService";
//
// function UpdateOrder() {
//     const { id } = useParams();
//     const [stateOrder, setStateOrder] = useState([]);//lưu danh sách
//     const navigate = useNavigate();//dùng chuyển về trang chir định
//     const [productData, setProductData] = useState([])
//     const validationSchema = Yup.object({
//         ngayMua: Yup.date().required("Khong duoc de trong"),
//         soLuong: Yup.number()
//             .min(1, "Chất lượng phải ít nhất là 1")
//             .required("Chất lượng là bắt buộc"),
//         product: Yup.string().required("Danh mục là bắt buộc")
//     });
//
//     const getByIdOrder = async () => {
//         const orders = await Order.getByIdOrder(id);
//         setStateOrder(orders);
//     };
//     const getProduct = async () => {
//         const temp = await Order.getAllProduct();
//         setProductData(temp);
//     };
//     const fetchData = async () => {
//         await getByIdOrder();
//         await getProduct();
//     };
//
//     useEffect(() => {
//         fetchData();
//     }, [id]);
//
//
//     const handleSubmit = async (values, { setSubmitting }) => {
//         try {
//             values.product = JSON.parse(values.product);
//             await Order.updateOrder(id, values)
//             toast.success("🔥 Cập nhật thành công");
//             navigate("/");
//         } catch (error) {
//             console.log(error);
//             toast.error("Có lỗi xảy ra");
//         } finally {
//             setSubmitting(false);
//         }
//     };
//
//     const handleCategoryChange = (event, setFieldValue) => {
//         const value = event.target.value;
//         try {
//             const productObject = JSON.parse(value); // Chuyển thành đối tượng
//             setFieldValue("product", productObject);
//         } catch (error) {
//             console.error("Lỗi phân tích chuỗi JSON: ", error);
//         }
//     };
//
//     return (
//         <Formik
//             enableReinitialize
//             initialValues={stateOrder}
//             onSubmit={handleSubmit}
//             validationSchema={validationSchema}
//         >
//             <div className="container">
//                 <div className="form">
//                     <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight: '700' }}>
//                         <h2>Update Product</h2>
//                     </div>
//                     <Form>
//                         <div className="form-group">
//                         <label htmlFor="soLuong">Số lượng</label>
//                         <Field type="number" name="soLuong" placeholder="Enter quality" value={stateOrder.soLuong}
//                                onChange={e => setStateOrder({...stateOrder, soLuong: e.target.value})}
//                         ></Field>
//                         <ErrorMessage className="err" name="soLuong" component="div"/>
//                     </div>
//                         <div className="form-group">
//                             <label htmlFor="ngayMua">Ngày mua</label>
//                             <Field type="date" name="ngayMua" placeholder="Enter quality" value={stateOrder.ngayMua}
//                             ></Field>
//                             <ErrorMessage className="err" name="ngayMua" component="div"/>
//                         </div>
//
//                         <div className="form-group">
//                             <label htmlFor="product">Category</label>
//                             <Field id="product" as="select" name="product" onClick={handleCategoryChange}>
//                                 <option value= ''>--Select product--</option>
//                                 {
//                                     productData.map(ct => (
//                                         <option key={ct.id} value={JSON.stringify(ct)}>{ct.name}</option>
//                                     ))}
//                             </Field>
//                             <ErrorMessage className="err" name="product" component="div"/>
//                         </div>
//
//                         <button type="submit">Create</button>
//                         <Link to="/"><button className="backbtn">Back</button></Link>
//                     </Form>
//                 </div>
//             </div>
//         </Formik>
//     );
// }
//
// export default UpdateOrder;
