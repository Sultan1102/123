import './App.css';
import {useState} from "react";
import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";


function App() {
    const [users, setUsers] = useState([])

    const addUser= (newUser) => {
        setUsers([...users, newUser]);
    }
        return (
            <div className="App">
                <main className="container-fluid">
                    <div className="row mt-2">
                        <div className="col-4">
                            <UserForm onAddUsers={addUser} />
                        </div>
                        <div className="col-4">
                            <Users users={users} />
                        </div>
                    </div>
                </main>
            </div>
        );
}

export default App;
