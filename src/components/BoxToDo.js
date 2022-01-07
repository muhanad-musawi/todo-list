import TodoEntry from "./TodoEntry";
import './BoxToDo.scss'

function BoxToDo(props) {  

  
 

  return ( 
   <section> 
      
     {props.todos.map((todo, index) => (<TodoEntry todo={todo} key={index} onDelete={props.onDelete} onCheck={props.onCheck} />))}
   </section> 
   
  )
  
} 

export default BoxToDo;