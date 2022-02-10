import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write"
import About from "./pages/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import {Context} from "./context/Context";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";



function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user? <Home /> : <Register />}</Route>
        <Route path="/login">{user? <Home /> : <Login />}</Route>
        <Route path="/write">{user? <Write /> : <Register />}</Route>
        <Route path="/settings">{user? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
      <Footer />
      
    </Router>
  );
}

export default App;
