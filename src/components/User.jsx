function User ({id, name, email, username}){
    const pixels = "3px"
    return (
        <div style={{ border: `${pixels} solid black` }}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Username: {username}</div>
        </div>
    )
}

export default User;