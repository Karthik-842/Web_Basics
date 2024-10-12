/* eslint-disable react/prop-types */
import PropTypes from  'prop-types'

 function List(props)
{
    // const fruits =[{id:1,name: "apple", calories:23, price: 100},
    //     {id:2,name:"orange", calories:20 , price: 60},
    //     {id:3,name: "pineapple", calories:45, price: 70},
    //     { id:4,name: "blackberry", calories:55, price: 120}
    // ];
    //fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical order
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse alphabetical order
    //fruits.sort((a,b) => a.calories - b.calories); // numeric order
    //fruits.sort((a,b) => b.price - a.price); // reverse numeric order

    //const lowCalFruit = fruits.filter(f => f.calories < 50); // Filter the items

    
    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp; {fruit.calories}</li>);
    return(
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.PropTypes={
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
 //   items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

List.defaultProps = {
    category: "Categories",
    items: [],

}
export default List;