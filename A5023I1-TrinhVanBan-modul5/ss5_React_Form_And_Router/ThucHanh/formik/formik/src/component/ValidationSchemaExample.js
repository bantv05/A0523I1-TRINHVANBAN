import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

const ValidationSchemaExample = () => {
const [state, setState] = useState({
    firstName: " ",
    lastName: " ",
    email: " "
});

const handleSubmit = (value) =>{
    console.log(value);
    console.log(state);
}

const validateForm = {
    firstName: Yup.string()
        .required("Không được để trống")
        .min(5, "Phải trên 5 ký tự")
        .matches(/^[A-Za-z ]{3,100}$/, "Name phải đúng định dạng"),
    lastName: Yup.string()
        .required("Không được để trống")
        .min(5, "Phải trên 5 ký tự")
        .matches(/^[A-Za-z ]{3,100}$/, "Name phải đúng định dạng"),
    email: Yup.string()
        .required("Không được để trống")
        .min(5, "Phải trên 5 ký tự")
        .matches(/^[A-Za-z ]{3,100}$/, "Name phải đúng định dạng"),
}
    return (
        <div>
            <Formik initialValues={state} onSubmit={handleSubmit} validationSchema={Yup.object(validateForm)}>
                <Form>
                    First Name:
                    <Field name="firstName"></Field>
                    <ErrorMessage name="firstName" component="span"></ErrorMessage>

                    Last Name:
                    <Field name="lastName"></Field>
                    <ErrorMessage name="lastName" component="span"></ErrorMessage>

                   Email:
                    <Field name="email"></Field>
                    <ErrorMessage name="email" component="span"></ErrorMessage>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default ValidationSchemaExample
