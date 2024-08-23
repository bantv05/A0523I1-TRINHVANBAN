import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const name = "Trịnh Văn Ban";
// 1. hiển thị tên bằng React.createElement
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   React.createElement("h1", { style: { textAlign: "center" } }, name)
// )
// 2. hiển thị tên bằng cú pháp JSX
//  <h1 style={{ textAlign: "center" }}>
// 	{ name }
// </h1>
// root.render(<h1 style={{ textAlign: "center" }}>
// 	{ name }
// </h1>) 
// 3. hiển thị danh sách các loại quả
// const fruits = [
//   "Apple", "Banana",
//   "Orange", "Apricot","Orange",
//   "Black rowan", "Cranberry"
// ];
// const List = ()=>(
//               <div>
//                 <h1>List of fruits</h1>
//                 <ul>
//                     {fruits.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}     
//                 </ul>
//               </div>
// ) 
// root.render(<List/>);
//khi sử dụng function thì có th sử dụng dược tag

// 4.Hiển thị thời gian hiện tại (dd/mm/yyyy – hh/mm/ss)

const Time = () => ( <div>
  <h1>Hello world</h1>
  <h2>it is {new Date().toLocaleString()}</h2>
</div>)
// new Date().toLocaleTimeString()
// new Date().toLocaleDateString()
// root.render(time);

const tick = () => {
  root.render(<Time/>)
  //nếu tạo tên biến thì nó sẽ gọi 1 lần khi thực thi
};
tick();
setInterval(tick, 1000);