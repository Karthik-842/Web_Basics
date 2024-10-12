/* eslint-disable no-unused-vars */
import React,{useState} from "react";

function Uarray()
{
    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood()
    {
        const newFood = document.getElementById("food").value;
        setFoods(foods => [...foods,newFood]);
        document.getElementById("food").value = "";
    }


    function handleRemoveFood(index)
    {
        setFoods(foods.filter((_,i) => i!==index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}
                >{food}</li>)}
            </ul>
            <input type="text" id="food" placeholder="Enter your food" />
            <button onClick={handleAddFood}>Add</button>
        </div>

    );
}

export default Uarray;