import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import User from "./components/users/User";
function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/user/:id" component={User} />
            <Route exact path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
