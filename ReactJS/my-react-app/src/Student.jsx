 
// props - read-only properties that are shared between components. Parent component can sent data to child components.
// PropTypes  - a mechanism that ensures that the passed value is of correct datatype.
// defaultProps - default values for props in case they are undefined. 

// conditional rendering - allows you to control what gets rendered in your application based on certain conditions (show, hide or change components)
import PropTypes from 'prop-types';
  
function Student(props)
{  
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No" }</p>
        </div>
    );
}


Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}


Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student;