import {useState} from "react";
// const orders = [100, 300, 500];
// function App() {
    //useState
  //   const total = orders.reduce((total, cur) => total + cur);
  // const [counter, setCounter] = useState(total);
  // const handledCount = () =>{
  //     // xay ra bat dong bo
  //     // setCounter(counter + 1);
  //     // setCounter(counter + 1);
  //     setCounter(prevState => prevState + 1);
  //     // setCounter(prevState => prevState + 1);
  // }
  // return (
  //   <div className="App" style={{padding: 20}}>
  //     <h1>{counter}</h1>
  //     <button onClick={handledCount}>Count</button>
  //   </div>
  // );

//     Two-way binding
//
//     const gifts = ['CUP i9', 'RAM 32GB RGB', 'RGB KEYBOARD'];
// function App() {
//     const [gift, setGift] = useState();
//     const handleUpdate = () =>{
//         const index = Math.floor(Math.random() * gifts.length);
//         setGift(gifts[index]);
//     }
//     return(
//         <div style={{textAlign: "center"}}>
//             <h1>{gift || 'Chưa có phần thưởng'}</h1>
//             <button onClick={handleUpdate}>Lấy phần thưởng</button>
//         </div>
//     );
//
// onChange sử dụng để cập nhật giá trị khi người dùng nhập liệu  hàm này sẽ được gọi, lấy giá trị từ input và cập nhật state name. một hàm callback
// function App() {
//     const [name, setName] = useState('');
//     return(
//         <div>
//             <input type="text"
//                 value = {name}
//                 onChange={e => setName(e.target.value)}
//             />
//             <button onClick={() => setName('Trinh Van Ban')}>Change</button>
//         </div>
//
//     );
// }

// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'JAVA'
//     },
//     {
//         id: 3,
//         name: 'REACT JS'
//     }
// ]

// const courses = [
//     {
//         id: 1,
//         name: 'HTML, CSS'
//     },
//     {
//         id: 2,
//         name: 'JAVA'
//     },
//     {
//         id: 3,
//         name: 'REACT JS'
//     }
// ]
//sử dụng radio
// function App() {
//     const [checked, setChecked] = useState();
//     const handleSubmit = () => {
//         console.log({id: checked})
//     }
//     return(
//         <div style={{textAlign: "center"}}>
//             {courses.map((course) =>(
//                 <div key={course.id}>
//                     <input type="radio"
//                            checked={checked === course.id}//
//                         onChange={() => setChecked(course.id)}
//                     />
//                     {course.name}
//                 </div>
//             ))}
//             <button onClick={handleSubmit}>Change</button>
//         </div>
//     )
// }
//sử dụng checkbox
const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JAVA'
    },
    {
        id: 3,
        name: 'REACT JS'
    }
]
function App() {
    const [checked, setChecked] = useState([]);//xét vào đâymangrgr để lưu id
    console.log(checked)
    const handleChecked = (id) => {
        setChecked(prevState => {
            const isChecked=checked.includes(id)//kiểm tra sự tồn tại
                if(isChecked){
                    return checked.filter(item => item !== id)
                }else {
                    return [...prevState, id]
                }
        })
    }

    const handleSubmit = (id) => {
        console.log({id: checked})
    }
    return(
        <div style={{textAlign: "center"}}>
            {courses.map((course) =>(
                <div key={course.id}>
                    <input type="checkbox"
                           checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Change</button>
        </div>
    )
}
export default App;
