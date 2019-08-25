import React from "react";
import savlon from "./assets/savlon.jpg"

class HomePageProfile extends React.Component {
  
 

  render() {
    return (
        <div className="profile">
        <h1>Award Winning Campaign</h1>
            <img src={savlon}></img>        
        </div>
    );
  }
}

export default HomePageProfile;
