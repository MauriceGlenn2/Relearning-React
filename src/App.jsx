import Todo from "./components/Todo"
import Header from "./components/Header";
import Modal from "./components/Modal";
import "./App.css"
import React, { useState } from "react"
import Counter from "./components/Counter";

function App() {

return <Counter />











  //place default value in ()
  //showModal is the current state, setShowModal is the updated state, useState() is default value
  const [showModal, setShowModal] = useState(false) 
  

  return (
    <div>
      <Header />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        
        <button onClick = {() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finsh FES"
        />
        <Todo title="Finsh interview Section"
        />
        <Todo title="Land 100k Job"
        />
      </div>
      {showModal && <Modal question="Are you sure?"/> }
      
    </div>
  );
}

// can export to use
export default App;


// For contitional rendering you have to use a ternary operator {isModalOpen && <Modal question="Are you sure?"/>}
// needs to be a boolean {isModalOpen ? <Modal question="Are you sure?"/> : null}
//is using a number then use {!!0}