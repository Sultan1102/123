import React from "react";

function UserItem({user, remove}) {
    console.log(user)
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Active: {user.active ? 'Yes' : "No"}</p>
            <p>Role: {user.role}</p>
            <button onClick={remove}>Удалить</button>
        </div>
    )
}
export default UserItem