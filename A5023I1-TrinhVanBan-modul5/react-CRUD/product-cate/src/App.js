import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListProduct from "./component/ListProduct";
import CreateProduct from "./component/CreateProduct";
import UpdateProduct from "./component/UpdateProduct";
import Read from "./component/Read";
import NotFound from "./pages/NotFound";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListProduct/>}></Route>
                <Route path="/create" element={<CreateProduct/>}></Route>
                <Route path="/update/:id" element={<UpdateProduct/>}></Route>
                <Route path="/read/:id" element={<Read/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </>
  );
}

export default App;