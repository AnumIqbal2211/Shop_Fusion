import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AdminDashboard from "./components/AdminPanel/AdminDashboard";
import Products from "./components/AdminPanel/Products/Products";
import AddNewProducts from "./components/AdminPanel/Products/AddNewProducts";
import Customers from "./components/AdminPanel/Customers";
import Orders from "./components/AdminPanel/Orders";
// import Inbox from "./components/AdminPanel/Inbox";
import FileManager from "./components/AdminPanel/FileManager";
import Calender from "./components/AdminPanel/Calender";
import Analytics from "./components/AdminPanel/Analytics";
import Invoice from "./components/AdminPanel/Invoice";
import Settings from "./components/AdminPanel/Settings";


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
            <Route path="/products" element={<Products />} />
            <Route path="/addnewproduct" element={<AddNewProducts />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/orders" element={<Orders />} />
            {/* <Route path="/inbox" element={<Inbox />} /> */}
            <Route path="/filemanager" element={<FileManager />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
