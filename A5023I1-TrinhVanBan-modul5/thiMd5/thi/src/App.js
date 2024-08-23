import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ListOrder from "./component/ListOrder";
import CreateOrder from "./component/CreateOrder";
import UpdateOrder from "./component/UpdateOrder";
import NotFound from "./pages/NotFound";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListOrder/>}></Route>
          <Route path="/create" element={<CreateOrder/>}></Route>
          {/*<Route path="/update/:id" element={<UpdateOrder/>}></Route>*/}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
