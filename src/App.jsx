
import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedRoutes from "./components/animated-routes";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router> 
      <div className="page-layout">
        {/* <Collapsible title="Navigation"> */}
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
          </ul>
        </nav>
        {/* </Collapsible> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <AnimatedRoutes/>
      </div>
    </Router>
  )
}

// Examples for getting routing working. 








export default App
