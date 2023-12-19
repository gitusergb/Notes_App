import './App.css';
import {Routes,Route} from "react-router-dom"
import { Signup} from './components/signup';
import { Login} from './components/Login';
import { CreateNote } from "./components/CreateNote";
import {Notes} from "./components/Notes";
function App() {
  return (
    <div className="App">
     <h2>Notes App</h2>
<Routes>
<Route path="/register" element={< Signup/>} />
<Route path="/login" element={< Login/>} />
{/* -------gb----- */}
<Route path="/create" element={< CreateNote/>} />
<Route path="/" element={<Notes/>} />
</Routes>
    </div>
  );
}

export default App;
