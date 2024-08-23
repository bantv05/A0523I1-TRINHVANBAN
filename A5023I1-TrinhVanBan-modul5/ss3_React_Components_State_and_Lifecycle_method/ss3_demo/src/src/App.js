import logo from './logo.svg';
import './App.css';
import StudentList from "./components/student/StudentList";
import DemoState from "./components/DemoState";

function App() {
    let nameClass = "A0623I1"
    // => State.

    const changeNameClass = (temp) => {
        console.log(temp);
        nameClass = temp;
        console.log(nameClass)
    }
  return (
    <>
      {/*<StudentList changeName = {changeNameClass} nameClass = {nameClass} ageClass="2"></StudentList>*/}
   <DemoState></DemoState>
    </>
  );
}

export default App;
