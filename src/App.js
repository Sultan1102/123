import './App.css';
import React, {useState} from "react";
import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";
import UserItem from "./Users/UserItem";


function App() {
    const [users, setUsers] = useState([])

    const addUser= (newUser) => {
        console.log('--', newUser);
        setUsers(prev => [...prev, newUser]);
    }

    const removeUser = (currentIndex) => {
        setUsers(prev => {
            const copy = [...prev]
            copy.splice(currentIndex, 1)
            return copy
        })
    }

        return (
            <div className="App">
                <main className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-4">
                            <UserForm onAddUsers={addUser} />
                        </div>
                        <div className="col-4">
                            {/*<Users users={users} remove={removeUser} />*/}
                            {users.map((user, index) => (
                                <UserItem key={index} user={user} removeUser={() => removeUser(index)}/>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
}

export default App;
