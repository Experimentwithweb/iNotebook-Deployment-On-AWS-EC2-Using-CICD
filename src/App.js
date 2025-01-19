// Purpose -this page holds the entire components of UI.You can say it as a entry point of React application.

//Importing the required modules from the react router dom library
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Importing the components as per requirement
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null); // Change the value of alert to null after 5 seconds.
    }, 1500);
}

  return (
    <>
      <NoteState showAlert={showAlert}> {/*Context api wrapper.All child elements of this tag will be able to use data and functions declared in context api.*/}
        <Router>  {/*It's like a navigation  */}
          <Navbar />
          <Alert alert = {alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
