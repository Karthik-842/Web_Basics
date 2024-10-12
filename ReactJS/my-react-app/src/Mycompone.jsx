/* eslint-disable no-unused-vars */
import React,{useState} from 'react';

function MyCompone()
{
    const [name,setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");


    function handleNameChange(event)
    {
        setName(event.target.value);
    }

    function handleAgeChange(event)
    {
        setAge(event.target.value);
    }

    function handleCommentChange(event)
    {
        setComment(event.target.value); 
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }

    function handleShippingChange(event)
    {
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value = {name} onChange={handleNameChange} type='string'/>
            <p>Name: {name}</p>

            <input value = {age} onChange={handleAgeChange} type='number'/>
            <p>Age: {age}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter the user comments'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="VISA">VISA</option>
                <option value="MASTERCARD">MasterCard</option>
                <option value="AMEX">AMEX</option>
                <option value="DISCOVER">Discover</option>   
            </select>

            <p>Payment: {payment}</p>

            <label>
                <input type = "radio" value="Pick Up" checked={shipping == "Pick up"} onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type = "radio" value="Delivery" checked={shipping == "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    )
}

export default MyCompone;