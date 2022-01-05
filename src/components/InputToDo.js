import './InputToDo.scss'
import { useState } from 'react';

function InputToDo (props) {  


// code of 07.12.21 	↓ 
const [userInput, setUserInput] = useState('')


const buttonClick = () => {  

 /* const array2 = 
  setUserInput('')
  props.settoDoArray(array2)*/
  props.onSubmit(userInput)
} 
   // code of 07.12.21  ↑

const changeHandler = (event) => {
  console.log(event.target.value);
  setUserInput(event.target.value);
};
 
  return(   
    <div>
   <input value= {userInput} type="text" className="inputText" onChange={changeHandler}></input> 
   <button onClick={buttonClick } className="inputBtn">Add</button>  
 
   </div>
  ) 
}; 

export default InputToDo;