import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
//event is an object which describe the eventnwhich occured/ that is a default js behavior you get in the browser
//when you listen to evevnt

const [enteredTitle , setEnteredTitle ] = useState('');
const[enteredAmount,SetEnteredAmount] = useState ('');
const [enteredDate,setEredDate] = useState('');
//insted of the three lines above we can do this
const[userInput,setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
});

const titleChangeHandler =(event)=>{
   setEnteredTitle(event.target.value);
   //another way
// setUserInput({
//      //now we should be sure that the other data does not get lost so we should apdate them
//    ...userInput,      //... this take an object and pulls out all the key value pairs and adds them to this new obj
//    enteredTitle:event.target.value,
// });

//better way
// setUserInput((prevState)=>{
//     return{...prevState,enteredTitle:event.target.value};
// });
//why we use this way? because 
// if you schadule a lot of state update at the same time you could be depending on a outdated
// or incorrect state snapshot if you use this approach in this way the state 
// will be always the latest state snapshot
};


const amountChangeHandler = (event) =>{
    SetEnteredAmount(event.target.value);
//     setUserInput({
//       ...userInput,     
//       enteredAmount:event.target.value,
//    });
 };


const dateChangeHandler = (event)=>{
    setEredDate(event.target.value);

    // setUserInput({
    //     ...userInput,     
    //     enteredDate:event.target.value,
    //  });
};

const submitHandler= (event) =>{
event.preventDefault();  //preventDefault() this is a built into js /default js behavior منتجنب انه البراوزر يعمل ريلود

const expenseData ={
title:enteredTitle,
amount:enteredAmount,
date: new Date(enteredDate)
};

props.onSaveExpenseData(expenseData);

setEnteredTitle('');
SetEnteredAmount('');
setEredDate('');
};


  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' 
          onChange={titleChangeHandler} 
          value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'
           min='0.01' 
           step='0.01' 
           onChange={amountChangeHandler}
           value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
           min='2019-01-01'
            max='2022-12-31' 
            onChange={dateChangeHandler}
            value={enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;