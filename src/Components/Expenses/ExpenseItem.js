// import React from 'react';

// import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
// import './ExpenseItem.css';

// function ExpenseItem(props) {

// //   const [title,setTitle] = useState(props.title); //in the array the first value is the variable itself(the curunt state value)
// //  //  and the second element is that the updating function(the function which we can call to set a new title)

// // function clickHandler (){
// //   setTitle('updated'); //we used  setTitle() instead of title = "updated"; because that calling this function
// //   //does not just assign a new value to some variable but that instead it is a special variable to begin with
// //   //it is managed by react somewhere in memory 
// //   console.log(title);
// // };

// return (
//   <Card className='expense-item'>
//     <ExpenseDate date={props.date} />
//     <div className='expense-item__description'>
//       <h2>{props.title}</h2>
//       <div className='expense-item__price'>${props.amount}</div>
//     </div>
//   </Card>
// );
// }





// export default ExpenseItem;


import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;