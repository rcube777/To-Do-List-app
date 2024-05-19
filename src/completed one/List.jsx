import PropTypes from "prop-types"

function List (props) {

    const itemList = props.items;
    const category = props.category;

const listItems = itemList.map(item => <li key = {item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>);  
    
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id : PropTypes.number,
    name: PropTypes.string,
    calories : PropTypes.number,
    }))
}

List.defaultProps = {
    category : "category",
    items : [],
}

export default List

// app.jsx file for this


// import List from "./List";

// const fruits = [{id : 1, name : "apple", calories:100},
//   {id : 2, name : "orange", calories: 90},
//   {id : 3, name : "banana", calories:110},
//   {id : 4, name : "coconut", calories: 48},
//   {id : 5, name : "lichhi", calories:130}];

//   const vegetables = [{id : 6, name : "carrot", calories:100},
//                       {id : 7, name : "potato", calories: 90},
//                       {id : 8, name : "celery", calories:110},
//                       {id : 9, name : "corn", calories: 48},
//                       {id : 10, name : "cucumber", calories:130}];


// return(
//   <>
//   {fruits.length > 0? <List items = {fruits} category = "Fruits"/> : null }
  
//   {vegetables.length > 0? <List items = {vegetables} category = "Vegetables"/> : null }
//   </>
// );