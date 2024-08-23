import logo from './logo.svg';
import './App.css';

function App() {
    let students = [
        {
            id: 1,
            name: "haiTT",
            age: 20,
            address: "Quảng Nam"
        },
        {
            id: 2,
            name: "haiTT1",
            age: 20,
            address: "Quảng Nam"
        },
        {
            id: 3,
            name: "haiTT2",
            age: 20,
            address: "Quảng Nam"
        }
    ]

    const addNewStudent = (temp) => {
        alert("Thêm mới" +temp)
    }
    return (
        <>
            <button onClick={() => addNewStudent("HaiTT")}>Thêm mới</button>
            <table border="1" width="400px">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                { students.map((student, index) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
