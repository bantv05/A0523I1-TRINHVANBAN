import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 1.[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const brow = <h4>browser's details: {navigator.userAgent}</h4>
// root.render(brow);

// 2.Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]

// const Table = () =>(
//     <table>
//       <thead>
//         <tr>
//           <th>Company</th>
//           <th>Contact</th>
//           <th>Country</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((item, index) => (
//           <tr key={index}>
//             <td>{item.company}</td>
//             <td>{item.contact}</td>
//             <td>{item.country}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(<Table/>)
/* <React.StrictMode>, React sẽ thực hiện một số hành động kiểm tra và cảnh báo những vấn đề tiềm ẩn trong ứng dụng của bạn */

// 3. [Bài tập] Tạo Element thể hiện Profile Card

const root = ReactDOM.createRoot(document.getElementById('root'));

const card = <div className="container">
  <div className="card">
    <div className="card--header" />
    <img
      className="avatar"
      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="avatar"
    />
    <div className="card--body">
      <div>
        <p className="text-header">Ruma Khan</p>
        <p className="text-sub">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <button className="btn third">FOLLOW</button>
      </div>
    </div>
  </div>
</div>

root.render(card);

