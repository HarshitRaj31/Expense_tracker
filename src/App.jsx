import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Homee from "./Dashboard/Hoome";
import Income from "./Dashboard/Income";
import Expense from "./Dashboard/Expense";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<Homee />}/>
        <Route path="/income" element={<Income />}/>
        <Route path="/expense" element={<Expense />}/>
      </Routes>
    </Router>
  );
}

export default App;