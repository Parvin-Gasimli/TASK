import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" component={() => <Register />} />
      <Route exact path="/Login" component={() => <Login />} />
      <Route exact path="/home" component={() => <Home />} />
      <Route exact path="/add" component={() => <AddPost />} />
     
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
