//each component you need to complete indiviual CSS
import "./Todo.css"


//Creating component, create folder to store, creat function to export out
//Reusable


function Todo({ title }){

    function deleteTodo(id){
        console.log('deleteTodo()', id)
    }

    return(
        <div className="todo">
            <p>{ title }</p>
            <button onClick={() => deleteTodo(1)}>Delete</button>
        </div>
    )
}

export default Todo;