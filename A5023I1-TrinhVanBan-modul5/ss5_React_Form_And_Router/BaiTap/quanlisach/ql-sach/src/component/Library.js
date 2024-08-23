import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as booksList from "../sevice/BookSevice";

const Library = () => {
  const [states, setStates] = useState({
      title:'',
      quantity: ''
  });
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

    useEffect(() => {
        let temp = booksList.getAllBooks();
    }, []);
  const validateYub = {
      title: Yup.string().min(3, "Chuổi phải trên 3 ký tự").required("Không được để trống!"),
      quantity: Yup.number().min(3, "sô lượng không được ít hơn 3").required("Không được để trống!")
  }
  const saveBook = (value) =>{
      booksList.saveBook(value);
  }
  return(
      <>
        <Formik initialValues={states} onSubmit={saveBook} validationSchema={Yup.object(validateYub)}>
            <Form>
                <label htmlFor="title">Tiêu đề</label>
                <Field name="title"/>
               <ErrorMessage name="title" component="span"></ErrorMessage>
                <br/>
                <label htmlFor="quantity">Số lượng</label>
                <Field name="quantity"/>
                <ErrorMessage name="quantity" component="span"></ErrorMessage>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
      </>
  );
}
export default Library;