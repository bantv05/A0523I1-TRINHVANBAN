import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ListProduct from "./component/ListProduct";
import CreateProduct from "./component/CreateProduct";
// import UpdateProduct from "./component/UpdateProduct";
import NotFound from "./pages/NotFound";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListProduct/>}/>
            <Route path="/create" element={<CreateProduct/>}/>
            {/*<Route path="/update/:id" element={<UpdateProduct/>}/>*/}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
      </>
  );
}

export default App;
