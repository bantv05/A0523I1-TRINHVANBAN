import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

const Contact = () =>{
    const [state, setState] = useState({
        name: '',
        email:'',
        phone:'',
        message:''
    });
    const validateForm = {
        name: Yup.string()
            .required("Name không được bỏ trống")
            .min(2,"tên phải có 2 ký tự trở lên"),
        email: Yup.string()
            .required("Name không được bỏ trống")
            .min(2,"tên phải có 2 ký tự trở lên")
            .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng"),
        phone: Yup.string()
            .required()
            .min(2),
    }
    const handleSub = () =>{
        alert("Nhận thông tin thành công");
    }
    const handleValidate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Required";
        } else if (values.name.length < 2) {
            errors.name = "Tên phải có 2 ký tự trở lên";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.phone) {
            errors.phone = "Required";
        } else if (values.phone.length < 10) {
            errors.phone = "Phone phải có ít nhất 10 ký tự";
        }

        return errors;
    };
    return(
        <div>
            <Formik initialValues={state} onSubmit={handleSub} validationSchema={Yup.object(validateForm)} validate={handleValidate}>
                <Form>
                    <h1>Contact form</h1>
                    Name:
                    <Field name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage><br/>
                    Email:
                    <Field name="email"></Field>
                    <ErrorMessage name="email" component="email" ></ErrorMessage><br/>
                    Phone:
                    <Field name="phone"></Field>
                    <ErrorMessage name="phone" component="span"></ErrorMessage><br/>
                    Message:
                    <Field name="message"  as="textarea"></Field><br/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
export default Contact;