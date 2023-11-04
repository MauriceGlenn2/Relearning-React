import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home (){
//to use data to place on page useState must be used
 const [users, setUsers] = useState([])

async function fetchUsersData() {
const { data } = await axios.get("https:jsonplaceholder.typicode.com/users")
    console.log(data)
    setUsers(data)
}
    

    useEffect(() =>{
        setTimeout(() =>{
            fetchUsersData()
        }, 2000)
        //on mount we fetch data with fetchUsersData()
            
    }, [])

    //cleaning up code
    function renderUsers(){
        return  users.map((user) => (
                    <Link to={`/users/${user.id}`} key={user.id}>
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            username={user.username}
                        />
                    </Link>
                ))
    }
    return(
        <div>
            {users.length ? renderUsers() : <h1>Loading...</h1>}
        </div>
    )
}

export default Home;