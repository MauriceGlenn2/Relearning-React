import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios"
// fetch(`"https:jsonplaceholder.typicode.com/users/id"`)
//click ID and have ID, name, etc show up for user
function Users() {
    // console.log(useParams())
    const { id } = useParams()
    const [user, setUsers] = useState({})

    async function fetchData(){
        const { data } = await axios.get(`https:jsonplaceholder.typicode.com/users/${id}`)
    //on mount fetch id{
        console.log(data)
        setUsers(data)
    }
    useEffect(() => {
        //object, not getting array any longer
       fetchData()
    }, [])
    return (
        <div>
            <Link to="/">Go Back</Link>
            <h1>{ user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.username}</h1>
        </div>
    )
}

export default Users