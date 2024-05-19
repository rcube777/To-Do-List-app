import React, {useState} from 'react';

function Component () {

    const [name, setName] = useState("guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [food, setFood] = useState("");
    const [shipping, setShipping] = useState ("Delivery");

    function handleNameChange (event){
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleComment = (event) => {
        setComment(event.target.value);
    }

    const handleFoodChange = (event)=> {
        setFood(event.target.value);
    }

    const handleShippingChange =(event) => {
        setShipping(event.target.value);
    }



return(
    <div>
        <h3>Enter Name</h3>
    <input type="text" onChange={handleNameChange} value={name} />
    <p> Name: {name} </p>
    <h3>Select Food</h3>
    <select name="food" onChange={handleFoodChange} >
        <option value="">Select an option</option>
        <option value="Burger">Burger</option>
        <option value="Pizza">Pizza</option>
        <option value="Chicken chilli">Chicken chilli</option>
        <option value="Chicken chhoila">Chicken chhoila</option>
    </select>
    <p>Food: {food}</p>
    <h3>Enter Quantity</h3>
    <input type="number" onChange={handleQuantityChange} value={quantity} />
    <p>Quantity: {quantity} </p>
    <h3>Give some instructions</h3>
    <textarea name="comment" id="1" onChange={handleComment} placeholder='enter the delivery instructions'></textarea>
    <p>comment: {comment}</p>

    <h3>Select Shipping Method</h3>
    <label >
        <input type="radio" 
        Value= "Pick Up" 
        checked = {shipping === "Pick Up"} 
        onChange={handleShippingChange}/> Pick Up
    </label><br />
    <label >
        <input type="radio" 
        Value= "Delivery" 
        checked = {shipping === "Delivery"} 
        onChange={handleShippingChange}/> Delivery

    </label>
    <p>Shipping: {shipping}</p>
    
    </div>
);
}
export default Component
