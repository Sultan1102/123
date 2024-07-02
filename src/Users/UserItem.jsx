import React from "react";

function UserItem(user) {
    console.log(user)
    return (
        <div>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Active:{user.active ? 'Yes' : "No"}</p>
            <p>Role:{user.role}</p>
        </div>
    )
}
export default UserItem