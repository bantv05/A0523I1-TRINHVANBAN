import {useEffect, useState} from "react";

function Car(){
    const [car, setCar] = useState('0');
    const [carValue, setCarValue] = useState('Mecerdec GLC 300');
    const [color, setColor] = useState('0');
    const [colorValue, setColorValue] = useState('White');

    useEffect(() => {
        switch (car){
            case "0":
                setCarValue("Mecerdec GLC 300");
                break;
            case "1":
                setCarValue("Toyota SUV C300");
                break;
            case "2":
                setCarValue("Mecerdec G63");
                break;
            case "3":
                setCarValue("BMW");
                break;
        }
    }, [car]);

    useEffect(() => {
        switch (color){
            case "0":
                setColorValue("White");
                break;
            case "1":
                setColorValue("Red");
                break;
            case "2":
                setColorValue("Grey");
                break;
            case "3":
                setColorValue("Green");
                break;
        }
    }, [color]);

    return(
        <div>
            <h1>Select your Car</h1>
            select a car:
            <select
                onChange={event => setCar(event.target.value)} value={car}
            >
                <option value="0">Mecerdec GLC 300</option>
                <option value="1">Toyota SUV C300</option>
                <option value="2">Mecerdec G63</option>
                <option value="3">BMW</option>
            </select>

            select a color:
            <select
                onChange={event => setColor(event.target.value)} value={color}
            >
                <option value="0">White</option>
                <option value="1">Red</option>
                <option value="2">Gray</option>
                <option value="3">Green</option>
            </select>

            <h2>You select a {colorValue} - {carValue}</h2>
        </div>
    );
}

export default Car;