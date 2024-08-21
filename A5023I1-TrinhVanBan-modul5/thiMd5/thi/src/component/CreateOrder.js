import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import * as Order from "../service/OrderService"
import React, {useEffect, useState} from 'react';
import {getAllCates} from "../service/OrderService";
function CreateOrder(){
    const [stateOrder, setstateOder] = useState({
        ma: '',
        ngayMua: '',
        tongTien: '',
        soLuong: '',
        product: ''
    })

    const [stateProduct, setStateProduct] = useState([]);

    useEffect(() => {
        getAllProduct();
    }, []);
    const getAllProduct = async () =>{
        const temp = await Order.getAllProduct();
        setStateProduct(temp);
    }
    const [tongTien, setTongTien] = useState(stateOrder.soLuong * stateOrder.product.gia)
    return(
        <Formik
            initialValues={stateOder} onSubmit={handleSubmit} validationSchema={Yup.object(validationSchema)}>
            <div className="container">
                <div className="form">
                    <div className="title" style={{ textAlign: 'left', marginBottom: '25px', fontWeight:'700'}}>
                        <h2>Create Product</h2>
                    </div>
                    <Form>
                        <Field type="hidden" name="ma" value={stateOder.id}/>
                        <div className="form-group">
                            <label htmlFor="ngayMua">Name Product</label>
                            <Field type="date" name="ngayMua" placeholder="Enter name product"/>
                            <ErrorMessage className="err" name="ngayMua" component="div"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tongTien">Tổng tiền</label>
                            <Field type="number" name="tongTien" placeholder="Enter quality"
                                   value={}
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
    )
}