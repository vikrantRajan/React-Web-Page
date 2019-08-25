import React from "react";
import vik from "./assets/web-highland-treats-19.jpg"
import vik2 from "./assets/web-highland-treats-20.jpg"

class HomePageMe extends React.Component {
  
 

  render() {
    return (
        <div className="profile2">
        <h1>Web Design</h1>
            <img src={vik}></img>    

            <img src={vik2}></img>      
        </div>
    );
  }
}

export default HomePageMe;
