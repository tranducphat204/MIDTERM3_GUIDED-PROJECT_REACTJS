import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Search from "./components/users/Search";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Router >
        <Navbar />
        <div className="container">
          <h1>Github Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            <Route exact path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
