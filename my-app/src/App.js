import Navbar from './components/Navbar';
import './App.css';
import {Router,Routes,Route} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/pages/index'

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
  );
}

export default App;
