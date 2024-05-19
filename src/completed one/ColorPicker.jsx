import React, {useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorPicker =(event) => {
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>selected color: {color} </p>
            </div>
        <label>select a color</label> 
        <input type="color" value = {color} onChange={handleColorPicker} />


        </div>
    );
}
export default ColorPicker