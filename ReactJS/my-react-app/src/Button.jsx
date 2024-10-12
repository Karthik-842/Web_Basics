// click event - an interaction is created
//               respond to click by passing a callback to the Onclick event handler

// <button onClick={()=>handleClick1("karthik")}> without calling a function inside this it will call automatically when we sent parameter to this function


// onDoubleClick event - an interaction is created when we click on a button that is already on the screen 
function Button()
{


    // const handleclick = () => {
    //     console.log(`out`);
    // }

    // let count =0;

    // const handleClick1 = (name) => {
    //     if(count <3)
    //     {
    //         count++;
    //         console.log(`Hello ${name} ${count}`);
    //     }
    //     else
    //         console.log(`Stop clicking me!`);
    // }

    const handleClick = (e) => e.target.textContent = "Hell0";

    return(
        <button onDoubleClick={(e) => handleClick(e)}> Click me</button>
    );
}


export default Button;

