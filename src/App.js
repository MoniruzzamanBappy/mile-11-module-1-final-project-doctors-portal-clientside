import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Signup from "./Pages/SignUp/Signup";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
