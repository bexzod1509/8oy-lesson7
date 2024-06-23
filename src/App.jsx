import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Create from "./pages/create/Create";
import Navbar from "./components/navbar/Navbar";
import Single from "./pages/single/Single";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/Auth/Auth";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/product/:id" element={<Single />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
