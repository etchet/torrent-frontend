import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Dashboard Routes
import Home from "./pages/Dashboard/Home";

// Authentication Routes
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Search from "./pages/Website/Search";
import footer from "./components/footer/styles/footer";
//footer
import { FooterContainer } from "./container/footer";

function App() {
  return (
    <Router>
      <Switch>
        {/* Dashboard Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />

        {/* Authentication Routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <footer></footer>
    </Router>
  );
}

export default App;
