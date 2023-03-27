/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   // RouterProvider
//   Route,
//   //   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4f5495";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUtil-DarkMode";
      setInterval(() => {
        Document.title = "TextUtil Is Amazing";
      }, 2000);
      setInterval(() => {
        Document.title = "Install TextUtil Now";
      }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUtil-LightMode";
    }
  };

  return (
    <>
     <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
      {/* <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <switch>   // When We use Routing we change <a> = <link> and href =  to
          <Route path="/"> //instead of path with write exact path ..this is good undersding
            <Alert alert={alert} />
          </Route>

          <Route path="about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter Your Text" mode={mode} />
          </Route>
        </switch>
      </Router> */}
      <Alert alert={alert} />
      <About />
      <TextForm heading="Enter Your Text" mode={mode} />
    </>
  );
}

export default App;
