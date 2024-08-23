import React from 'react';
import ReactDOM from 'react-dom/client';

// I. Bài đọc
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // Phép "ràng buộc" (bind) này là cần thiết để `this` hoạt động trong callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Toggle />);
// bai2
// class Football extends React.Component {
//   //Cú pháp này đảm bảo `this` được ràng buộc trong shoot.
//   shoot = (a) => {
//     alert(a);
//     /*
//     Từ khóa 'this' đề cập đến đối tượng thành phần
//     */
//   }
//   render() {
//     return (
//       <button onClick={this.shoot("abc")}>Take the shot!</button>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Football />);

// 3. cơ chế render có điều kiện
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: "", inputText: "", mode: "view" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSave = this.handleSave.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ inputText: e.target.value });
//   }

//   handleSave() {
//     this.setState({ text: this.state.inputText, mode: "view" });
//   }

//   handleEdit() {
//     this.setState({ mode: "edit" });
//   }

//   //Để render ra các phương thức, ta kiểm tra các thuộc tính mode
//   render() {
//     if (this.state.mode === "view") {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <button onClick={this.handleEdit}>Edit</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <input onChange={this.handleChange} value={this.state.inputText} />
//           <button onClick={this.handleSave}>Save</button>
//         </div>
//       );
//     }
//   }
// }
