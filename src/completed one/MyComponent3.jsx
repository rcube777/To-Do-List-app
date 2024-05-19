// Update arrays in state

import React, {useState} from 'react'

function MyComponent3 () {

    const [foods, setFoods] = useState(["apple", "mango", "banana"]);

    const handleAddFood = () => {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !==index));

    }


    return(
        <div>
            <h2>Lists of foods</h2>
            <ul>
                {foods.map((food, index) => 
                <li key = {index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter Food Name' />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}
export default MyComponent3