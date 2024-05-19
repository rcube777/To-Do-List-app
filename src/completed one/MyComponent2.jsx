// UPDATE OBJECTS IN STATE

import React, {useState} from "react";

function MyComponent () {
    const [car, setCar] = useState({year: 2024, make: "Tesla", model: "Model S"});

    const handleCarYear = (event) => {
        setCar(c => ({...c, year: event.target.value}))
    }
    const handleCarMake = (event) => {
        setCar (c=> ({...c, make: event.target.value}))
    }
    const handleCarModel = (event) => {
        setCar(c=> ({...c, model: event.target.value}))
    }

    return(
        <div>
            <h1>Select your favourite Car</h1>
            <input type="number" value={car.year} onChange={handleCarYear} /><br />
            <input type="text" value={car.make} onChange={handleCarMake}/><br />
            <input type="text" value={car.model} onChange={handleCarModel}/>
            <p>Your favourite car is: {car.year} {car.make} {car.model} </p>

        </div>
    );
}
export default MyComponent