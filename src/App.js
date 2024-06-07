import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemContext";
function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${darkMode ? "bg-dark" : ""}`}>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
