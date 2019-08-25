import React from "react";
import Typed from "typed.js";
class HomePage extends React.Component {
  componentDidMount() {
    new Typed("#typed1", {
      strings: [
        "Hi! my name is Vikrant Rajan, I am a Full Stack Developer",
        "Hi! my name is Vikrant Rajan, I am an Art Director",
        "Hi! my name is Vikrant Rajan, I am a Music Producer",
        "Hi! my name is Vikrant Rajan, I love to think of creative ideas",
        "Hi! my name is Vikrant Rajan, I love solving problems",
        "Hi! my name is Vikrant Rajan, I love communication and Strategy",
      ],
      typeSpeed: 80,
      backSpeed: 0,
      smartBackspace: true,
      loop: true
    });
  }
 

  render() {
    return (
      <div className="type-wrap-1">
        <span id="typed1" />
      </div>
    );
  }
}

export default HomePage;
