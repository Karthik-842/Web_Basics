// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function MyComponent()
{
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = () =>{
        setName("Karthik");
        setAge(24);
    }

    const updateCount = () =>{
        setCount(count + 1);
    }

    const toggleIsEmployee = () =>
    {
        setIsEmployee(!isEmployee);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Count: {count}</p>
            <button onClick={updateCount}>Set count</button>

            <p>IsEmployed: {isEmployee? "Yes":"No"}</p>
            <button onClick={toggleIsEmployee}>Toggle Employee Status</button>
        </div>
    )
}

export default MyComponent;