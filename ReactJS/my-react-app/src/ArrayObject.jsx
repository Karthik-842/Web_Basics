/* eslint-disable no-unused-vars */
import React, {useState} from "react";

function ArrayObject()
{

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(2024);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    function handleAddCar()
    {
        const newCar = {
            year: year,
            make: make,
            model: model
        };
        setCars([...cars, newCar]);
        setYear(2024);
        setMake("");
        setModel("");
    }

    function handleDeleteCar(index)
    {
        setCars(cars => cars.filter((_, i) => i!==index));
    }

    function handleYearChange(e)
    {
        setYear(e.target.value);
    }

    function handleMakeChange(e)
    {
        setMake(e.target.value);
    }

    function handleModelChange(e)
    {
        setModel(e.target.value);
    }


    return(
        <div>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car,index) => 
                <li key={index} onClick={()=> handleDeleteCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>
            <input type="number" value={year} onChange={handleYearChange} /><br/>
            <input type="text" value={make} onChange={handleMakeChange} /><br/>
            <input type="text" value={model} onChange={handleModelChange} />

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default ArrayObject;