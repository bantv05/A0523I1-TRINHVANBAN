import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About } from "./component/Home";
import Builder from "./component/Builder";
import Category from "./cmpn/Category";
import Product from "./cmpn/Product";

export default function App() {
    return (
            <div className="App">
                {/*<h1>Welcome to React Router!</h1>*/}
                {/*    <ul>*/}
                {/*        <li><Link to="/">Home</Link></li>*/}
                {/*        <li><Link to="/about">About</Link></li>*/}
                {/*    </ul>*/}
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Home />} />*/}
                {/*    <Route path="about" element={<About />} />*/}
                {/*</Routes>*/}
                {/*<Builder/>*/}
                <Routes>
                    <Route path={"/"} element={<Category/>}/>
                    <Route path={"/product/:categoryId"} element={<Product/>}/>
                </Routes>
            </div>
    );
}
