import './TodoEntry.scss'

function TodoEntry( props) { 
 const { todo, done} = props;
 
/* 
 -  todo text in Todo hinzufügen
 -  Delete todo X  
 -  checkbox on oder off 
 -  todo text erledigt zu  Done 
*/ 

const deleteHandler = () => { 
 props.onDelete(todo.id) 

} 
const checkHandler = () => { 
  props.onCheck(todo.id) 
 
 }

  return (  
    <div className="toDoEntry">
    <div className="entry"> 
      <input className="checkbox"  onClick={checkHandler} type="checkbox"></input>
      <span>{done}</span>
      <div className="todoText" >{todo.text}</div> 
      <div  
      className="todoDelete"  
      onClick={deleteHandler  }> 
      
      X</div>
    </div> 
    </div>
  )
} 

export default TodoEntry