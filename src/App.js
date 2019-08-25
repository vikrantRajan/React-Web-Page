import React from "react";
import vik2 from "./assets/logo-09.png"
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./Headline";
import HomePageProfile from "./Profile";
import HomePageSkills from "./ProfileTwo";
import HomePageMe from "./ProfileThree";
import Footer from "./footer";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img className="logo" src={vik2}></img> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>
<HomePage />
<HomePageProfile />
<HomePageMe />
<HomePageSkills />
<Footer />
    </div>

  );
}

export default App;
