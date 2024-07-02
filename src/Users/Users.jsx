import React from "react";
import UserItem from "./UserItem";

function Users({users}) {
    console.log(users)

    return (
        <div>
            {users.map((user, index) => (
                <UserItem key={index} user={user}/>
            ))}

        </div>
    )
}

export default Users