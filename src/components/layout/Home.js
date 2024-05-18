import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Search from "../users/Search";
import About from "../pages/About";
import User from "../users/User";
import NotFound from "../pages/NotFound";

const Home = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default Home;
