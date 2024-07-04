import React from "react";
import UserItem from "./UserItem";

function Users({users, remove}) {
    console.log(users)

    return (
        <div>
            {users.map((user, index) => (
                <UserItem key={index} user={user} removeUser={() => remove(index)}/>
            ))}

        </div>
    )
}

export default Users