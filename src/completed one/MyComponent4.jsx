// update ARRAY of OBJECTS in state

import React, {useState} from "react";

function MyComponent4 () {

    const [cars, setCars] = useState ([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    const handleAddCar = () => {
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c=>[...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    const handleYearChange =(event)=> {
        setCarYear(event.target.value);
    }
    const handleMakeChange =(event)=> {
        setCarMake(event.target.value);

    }
    const handleModelChange = (event)=> {
        setCarModel(event.target.value);

    }

    return(<div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car, index) =><li key={index}>
                    {car.year} {car.make} {car.model}
                </li> )}

            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange}
             placeholder="Enter car make"/> <br />
            <input type="text" value={carModel} onChange={handleModelChange}
             placeholder="Enter car model"/> <br />
            <button onClick={handleAddCar}>Add car</button>
            </div>);

}

export default MyComponent4