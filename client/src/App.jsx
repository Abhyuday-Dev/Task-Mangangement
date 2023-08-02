import React from "react";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import AddTask from "./components/AddTask/AddTask";
import AllTasks from "./components/AllTasks/AllTasks";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Tasks" element={<AllTasks />} />
        <Route exact path="/addTask" element={<AddTask />} />
      </Routes>
    </Router>
  );
}

export default App;
