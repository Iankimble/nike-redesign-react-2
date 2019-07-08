// Importing instance of react
import React from 'react';

// Navigation bar 
import NavBar from "./Components/NavBar";

// Routes to page components
import Home from "./Components/Pages/Home";
import LeBron from "./Components/Pages/LeBron";
import Kobe from "./Components/Pages/Kobe";
import KD from "./Components/Pages/KD";
import Jordan from "./Components/Pages/Jordan";



// footer
import Footer from "./Components/Footer";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/LeBron" component={LeBron} />
        <Route path="/KD" component={KD} />
        <Route path="/Jordan" component={Jordan} />
        <Route path="/Kobe" component={Kobe} />
      </Switch>
      < Footer />
    </div>
  </Router>
);

export default App;
