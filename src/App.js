import './App.scss'; 
import './index.scss';
import InputToDo from './components/InputToDo' ; 
import BoxToDo  from './components/BoxToDo'; 
import { useReducer } from "react";
import {useState} from 'react' 


let counter = 0;  

const getNewId = () =>{ 
  counter += 1;
  return counter
}

function reducer(state, action) {
  
  switch (action.type ) {
    case 'add': 
      return [ {  
        id: getNewId(),
        text: action.payload, 
        check: false, 

      } ,...state]
      break;
      case 'delete':  
       const idTODelete = action.payload 
      return state.filter( (todo) => { 
       
        if (todo.id === idTODelete) {
            return false
        } else { 
          return true
          
        }
      })
      

    default:
      return state
  }
};



const initialState = [ 
  { 
    id: getNewId(), 
    text: '',
    done: false,
  }
] 

function App() { 

  
 

   const [ toDoArray, dispatch] = useReducer (reducer, initialState); 

  
   
  return (
    <main >
     <InputToDo onSubmit={(userInput) => dispatch(  {
       type: 'add', 
       payload: userInput,

     })} />
     
   
    <h1>Todo</h1>
     <BoxToDo todos={toDoArray} onDelete={ (userInputDelete) => dispatch(  {
       type: 'delete', 
       payload: userInputDelete,

     })}/> 

     <h1>Done</h1>
     <BoxToDo todos={toDoArray} />
    </main>
  );
}

export default App;
