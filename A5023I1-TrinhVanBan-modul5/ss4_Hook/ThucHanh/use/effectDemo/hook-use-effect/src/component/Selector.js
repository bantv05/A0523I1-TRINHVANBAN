import {useState, useEffect} from "react";

function Selector(){
    const [selected, setSelected] = useState("1");
    const [valueSelected, setValueSelected] = useState('');

    useEffect(() => {
        switch (selected){
            case "1":
                setValueSelected('Java');
                break;
            case "2":
                setValueSelected('CSS');
                break;
            case "3":
                setValueSelected('React JS');
                break;
            case "4":
                setValueSelected('Angular');
                break;
        }
    }, [selected]);

    return(
        <div>
            Khoá học :
            <select
                onChange={e => {
                setSelected(e.target.value)}}
            >
                <option value="1">Java</option>
                <option value="2">CSS</option>
                <option value="3">React JS</option>
                <option value="4">Angular</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </div>
    );
}
export default Selector;