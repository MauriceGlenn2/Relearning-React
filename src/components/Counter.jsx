
import "./Counter.css"
import React, { useState } from "react"

function Counter (){
    // const [defaultNum, changeNum] = useState (0)

    // function addCounter(){
    //     //to use the previous state we have to use a callback function
    //     changeNum((prevDefaultNum) => prevDefaultNum + 1)
    //     changeNum((prevDefaultNum) => prevDefaultNum + 1) //incerment by 2
    // }

    // function subCounter (){
    //     changeNum((prevDefaultNum) => prevDefaultNum - 1)
    //     changeNum((prevDefaultNum) => prevDefaultNum - 1) //decrease by 2
    // }
    // return(
    //     <div className="counter__wrapper">
    //         <button onClick={addCounter}>+</button>
    //     <h1>{defaultNum}</h1>
    //         <button onClick={subCounter} >-</button>
    //     </div>
    // )





//<------------------------Example -------------------------------------->
    const [cart, setCart] = useState ({ 
        item: "apple", 
        quantity: 0,
    })

    function removeApple (){
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    function addApple (){
        //Getting the previous amount
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }
    return (
        <div className="counter__wrapper">
            <button onClick={addApple}>+</button>
            {cart.quantity}
            {cart.item}
            <button onClick={removeApple}>-</button>
        </div>
    )
}

export default Counter;

//stopped at 1:04