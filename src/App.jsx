import Todo from "./components/Todo"
import Header from "./components/Header";
import Modal from "./components/Modal";
import "./App.css"
import React, { useState, useEffect } from "react"
import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./Pages/Users.jsx";

function App() {
  //place default value in ()
  //showModal is the current state, setShowModal is the updated state, useState() is default value
  // const [showModal, setShowModal] = useState(false)

  // //using emitting Events:

  // function onTodoDelete() {
  //   console.log('onTodoDelete')
  //   setShowModal(true)
  // }

  // //closing out modal after confriming or canceling in Parent
  // function cancelModal() {
  //   setShowModal(false)
  // }
  // function confrimModal() {
  //   setShowModal(false)
  // }

  //useeffect works as soon as somthing is mounted, 2 arguements. 
  //1. first arugment is a callback
  //2. second argument is dependent array, empty array
  //Fetch data as soon as page mounts

  // useEffect(() => {
  //   console.log("runs on mount")
  // }, [])

  // useEffect(() => {
  //   console.log("runs on mount And showmodal change")
  // }, [showModal])

  // useEffect(() => {
  //   console.log("runs every render")
  // })

  // return (
  //   <div>
  //     <Header />
  //     <div>
  //       <input type="text" onChange={(event) => {
  //         console.log(event.target.value)
  //       }} />

  //       <button onClick={() => setShowModal(true)}>Add Todo</button>
  //     </div>
  //     <div className="todo__wrapper">
  //       <Todo onTodoDelete={onTodoDelete} title="Finsh FES"
  //       />
  //       <Todo onTodoDelete={onTodoDelete} title="Finsh interview Section"
  //       />
  //       <Todo onTodoDelete={onTodoDelete} title="Land 100k Job"
  //       />
  //     </div>
  //     {showModal && <Modal cancelModal={cancelModal} confrimModal={confrimModal} question="Are you sure?" />}
  //   </div>
  // );

  //<----------------------Router------------------->
  return (
    // Wrap everything in a Router
      <Router>
        {/* Keeping nav bar on every page */}
        
        <Routes>
          {/* Wrap pages in routes */}
          <Route path="/" element={<Home />} />

         {/* Creating a dynamic path */}
          <Route path="/users/:id" element={<Users/>} />
        </Routes>
      </Router>
  )
}


export default App;


// For contitional rendering you have to use a ternary operator {isModalOpen && <Modal question="Are you sure?"/>}
// needs to be a boolean {isModalOpen ? <Modal question="Are you sure?"/> : null}
//is using a number then use {!!0}