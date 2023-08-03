import React from "react";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Main,AllTasks,AddTask} from "./pages"

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
