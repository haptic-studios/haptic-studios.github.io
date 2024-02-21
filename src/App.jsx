
import React from "react";
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
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/games" element={<Games />}/>
          {/* Catchall route*/}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  )
}

// Examples for getting routing working. 
function Home() {
  return (
    <div className="content-layout">
      <video className="logo-video" src={`/src/videos/split-the-world-bg.mp4#t=${Math.random() * 60}`} autoPlay loop muted/>
      <div className="logo-container">
        <img className="studio-logo" src="/src/images/haptic-studios-inverted.png"/>
        <Link to="/about" className="spaced-letters logo-link">THE TEAM</Link>
        <Link to="/games" className="spaced-letters logo-link">THE GAMES</Link>
      </div>
    </div>
  )
}

function About() {
  return (
    <h2>About</h2>
  );
}

function Games() {
  return (
    <h2>Games</h2>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
