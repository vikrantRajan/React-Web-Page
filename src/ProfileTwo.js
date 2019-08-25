import React from "react";
import skills from "./assets/skills.jpg"

class HomePageSkills extends React.Component {
  
 

  render() {
    return (
        <div className="profile">
        <h1>Award Winning Campaign</h1>
            <img src={skills}></img>        
        </div>
    );
  }
}

export default HomePageSkills;
