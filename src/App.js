import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

 
function App() {
  return (
    <Router>
       <div className="App">
         <Switch>

           <Route path="/login">
             <h1>Log In</h1>
           </Route>

           <Route path="/">
           <Navbar />
           <Home />
           </Route>
         
  

  {/* NavBar */}
  {/* Home */}
  {/* Login */}
         </Switch>
      
    </div>
    </Router>

   
  );
}

export default App;



