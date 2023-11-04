//each component you need to complete indiviual CSS
import "./Todo.css"


//Creating component, create folder to store, creat function to export out
//Reusable


function Todo({ title, onTodoDelete }){

    return(
        <div className="todo">
            <p>{ title }</p>
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    )
}

export default Todo;