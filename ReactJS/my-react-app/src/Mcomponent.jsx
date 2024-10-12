// Update Object in State
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function MComponent()
{
    const [car,setCar] = useState({year: 2024, 
                                manufacturer:"Ford",   
                                model:"Mustang"});

    function handleyearChange(e)
    {
        setCar({...car, year: parseInt(e.target.value) });
    }

    function handlemanufacturerChange(e)
    {
        setCar({...car, manufacturer: e.target.value });
    }

    function handlemodelChange(e)
    {
        setCar({...car, model: e.target.value });
    }

    return (
        <div>
            <p>Your favorite car is: {car.manufacturer} {car.model} {car.year}</p>
            
            <input type="number" value={car.year} onChange={handleyearChange} /> <br />
            <input type="string" value={car.manufacturer} onChange={handlemanufacturerChange} /> <br/>
            <input type="string" value={car.model} onChange={handlemodelChange}/>
        </div>

    );
}

export default MComponent;