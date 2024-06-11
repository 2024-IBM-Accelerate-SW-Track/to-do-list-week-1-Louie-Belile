import "./About.css";
import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image" alt="Profile Pic" src= "..src/pages/Headshot.jpg" />
          </div>
        </div>
        <div className = "split right">
          <div className="centered">
            <div className = "name_title">Louie Belile</div>
            <div className = "brief_description">
              <p> My passion has always been working on civic technologies. I find value in working in fields and projects that make real world change. Data science has been an avenue that has allowed me to merge civic change and software technologies. I have worked for civic consulting companies that have allowed me to make impact in local politics, housing issues, and even gun violence. As technologies expand, I wish to spend more time involved in spaces that aim to leverage and develop the technology that will change our world. Reach out if you'd like to talk about some technology that you believe will be the next big impact. Or if you just want to chat about anything as well, I'm always eager to meeting a new person!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

