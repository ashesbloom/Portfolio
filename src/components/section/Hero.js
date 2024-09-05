import React from "react";
import "../assets/style/Hero.scss";
import { CodeBlock, monokai } from "react-code-blocks";

function Hero() {
  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Step into my portfolio journey!👋</h1>
          <p>
            This is where I showcase past projects and blogs. But before we
            explore my portfolio beyond the usual projects, allow me to
            introduce myself:
          </p>
          <div className="desktop-codeblock">
            <CodeBlock
              text={`const person = 
  {
    firstName: 'Mayank',
    lastName: 'Pandey',
    story: 'Undergraduate Student | Full Stack Developer',
    city: 'Lucknow, UP',
    
    fullName: function () 
    {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  function Intro(obj) 
  {
    console.log("Hi! I'm " + obj.fullName() 
    + ", a " + obj.story + " based in " + obj.city);
  };
  
  Intro(person);`}
              language={"javascript"}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>

          <div className="mobile-responsive-codeblock">
            <CodeBlock
              text={`const person = {
    firstName: 'Mayank',
    lastName: 'Pandey',
    story: 'Full Stack Developer'
    city: 'Lucknow, UP',
    fullName: function () {
      return this.firstName 
        + ' ' + this.lastName;
    }
  };
  
  function Intro(obj) {
    console.log("Hi! I'm " 
      + obj.fullName() 
      + ", a " + obj.role 
      + " based in " 
      + obj.city);
  };
  Intro(person);`}
              language={"javascript"}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img
            src="https://i.ibb.co/rmfQr74/Whats-App-Image-2024-08-19-at-8-57-44-PM.jpg"
            alt="Mayank's Profile image"
            width="20%"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
