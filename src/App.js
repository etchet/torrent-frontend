import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Dashboard Routes
import Home from "./pages/Dashboard/Home";

// Authentication Routes
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Switch>
        {/* Dashboard Routes */}
        <Route exact path="/" component={Home} />

        {/* Authentication Routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
