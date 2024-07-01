import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
    const [ooo, setOoo] = useState([])
    const addItem = (item) => {
        setOoo(prev => [...prev, item])
    }
        return (
      <div className="App">
          <main className="container-fluid">
              <div className="row mt-2">
                  <div className="col-4">
                      <UserForm adddate={addItem}  />
                  </div>
                  <div className="col-4">
                      <Users/>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default App;
