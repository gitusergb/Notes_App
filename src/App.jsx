import './App.css';
import {Routes,Route} from "react-router-dom"
import { Signup} from './components/signup';
function App() {
  return (
    <div className="App">
     <h2>Notes App</h2>
<Routes>
<Route path="/register" element={< Signup/>} />
</Routes>
    </div>
  );
}

export default App;
