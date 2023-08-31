import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
