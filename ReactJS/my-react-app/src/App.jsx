// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
//import List from "./List";
//import Button from "./Button";
//import ProfilePicture from "./ProfilePicture";
//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
//import MyCompone from "./Mycompone";
//import ColorPicker from "./ColorPicker";
//import Mcomponent from "./Mcomponent";
//import Uarray from "./Uarrray";
//import ArrayObject from "./ArrayObject";
import ToDoList from "./ToDoList";


function App() {

//    const fruits =[{id:1,name: "apple", calories:23, price: 100},
//       {id:2,name:"orange", calories:20 , price: 60},
//       {id:3,name: "pineapple", calories:45, price: 70},
//       { id:4,name: "blackberry", calories:55, price: 120}
//   ];


//   const vegetables =[{id:5,name: "carrot", calories:103, price: 60},
//    {id:6,name:"potato", calories:30 , price: 40},
//    {id:7,name: "onion", calories:65, price: 80},
//    { id:8,name: "beans", calories:85, price: 30}
// ];


//    return(
//     // <>
//     //   <Student name="Patrick" age={24} isStudent={false}/>
//     //   <Student name="Karthik" age={30} isStudent={true}/>
//     //   <Student name="Ashley" age={26} isStudent={true}/>
//     //   <Student name="Jenny" age={22} isStudent={false}/>
//     //   <Student name="Larry"/>
//     // <>
//     //     <UserGreeting isLoggedIn = {true} username="BroCode" />
//     //     <UserGreeting isLoggedIn = {false} username="Guest" />
//     // </>

    
//     <>
//       {fruits.length>0?<List items={fruits} category="Fruits" />:null}
//       {vegetables.length>0} && <List items={vegetables} category="Vegetables" />  
//     </>

return(
    <>
    <ToDoList />
    </>
   );
}

export default App;
