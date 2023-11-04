

import React, { useState } from "react"


//<---------------------------Hooks: Usestate with Objects and Arrays------------------------------------->

function Counter() {
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
    // const [cart, setCart] = useState ({ 
    //     item: "apple", 
    //     quantity: 0,
    // })

    // function removeApple (){
    //         //1. use a callback to get previous value 
    //     setCart(prevCart => ({
    //         //2. spreadout all propertied of the prev state
    //         ...prevCart, //spread properties
    //         //3. only change the property that you need to change
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }

    // function addApple (){
    //     //Getting the previous amount
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }
    // return (
    //     <div className="counter__wrapper">
    //         <button onClick={addApple}>+</button>
    //         {cart.quantity}
    //         {cart.item}
    //         <button onClick={removeApple}>-</button>
    //     </div>
    // )



    //<-------------------using arrays-------------------------------------->
    //every time I click the + add to array and - sub from array
    //["+", "-". '+']

    const [arr, setArr] = useState([])
    
    function addPlus() {
        setArr(prevArr => [...prevArr, "+"]) //"preArr" can be called whatever you want
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }

    return (
        <div className="counter__wrapper">
            <button onClick={addPlus}>+</button>
            <button onClick={addMinus}>-</button>
            {/* toString() adds "," bettween elements */}
            {arr.toString()} 
        </div>
    )
}

export default Counter;

//stopped at 1:04