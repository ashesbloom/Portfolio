import React from "react";
import "../assets/style/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="project">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="http://blogs.ap-south-1.elasticbeanstalk.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/RTx4ygb/bloging-logo.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="http://blogs.ap-south-1.elasticbeanstalk.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Blogs!✒️</h2>
            <h5>
              Note: Please ensure that the protocol is 'http' and not 'https,' as there is no SSL certificate in place yet.
            </h5>
          </a>
          <p>
            A sleek and minimal blogging platform with dark mode, an adaptive sidebar, and hidden Easter eggs for users to discover. It supports HTML embedding in blogs, displays post progress, and estimates reading time. Built using Node.js, Express, and MongoDB, it ensures security with SHA-256 password hashing and JWT authentication.
          </p>
          <p>
            Used: JavaScript, Node.js, MongoDB, Express, EJS, Multer, cookie-parser, JWT
          </p>
        </div>
        <div className="project">
          <a
            href="https://urlshortener-production-dfbc.up.railway.app/ashes/home"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/8Pds6Zq/226deb92-9e15-4948-99e4-a9e931bcb907.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://urlshortener-production-dfbc.up.railway.app/ashes/home"
            target="_blank"
            rel="noreferrer"
          >
            <h2>URL Shortener 🌐</h2>
          </a>
          <p>
            A comprehensive web application that simplifies long URLs into shorter, easily shareable links. It includes robust features like user authentication, allowing secure access, and custom URL creation to let users personalize their shortened links. Click tracking is implemented to monitor link activity, while a dynamic admin portal provides tools to manage user roles, track statistics, and handle URL entries. The application also retains URL click history for 3 days, with options for both users and admins to clear the history or delete entries
          </p>
          <p>
            Used: Node.js, Express.js, MongoDB Atlas, EJS, and JWT
          </p>
        </div>
        <div className="project">
          <a
            href="https://world-chat-zuyy.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/60QR41v/Screenshot-363.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://world-chat-zuyy.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>World Chat🗣️</h2>
            <h5>
              Note: May take some time to load first time as hosted on render as free tier.
            </h5>
          </a>
          <p>
            A real-time global chat application built using Node.js, Socket.io, and Bootstrap. It enables live user count, ephemeral messaging, and user-controlled connectivity.
          </p>
          <p>Used: Node.js, Socket.io, Bootstrap</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/ashesbloom/Heathcare-Website/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/7jR9M5t/logo-transparent-png.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://github.com/ashesbloom/Heathcare-Website/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <h2>HealthVirtucare</h2>
          </a>
          <p>
            HealthVirtuCare is a healthcare website designed to facilitate seamless interaction between doctors and patients through live video calls, appointment bookings, and more. This guide will walk you through the process of hosting the website on your local machine using XAMPP.
          </p>
          <p>Used: HTML, CSS, JavaScript, PHP, MySQL</p>

        </div>
        <div className="project">
          <a
            href="https://ashesbloom.github.io/music-webpage/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/vwx3tv7/logo.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://ashesbloom.github.io/music-webpage/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ACRUX</h2>
          </a>
          <p>
            ACRUX is a user-friendly music streaming website designed to offer an immersive experience with abstract visuals. It currently allows users to stream music in both MP3 and FLAC formats, featuring two albums—Smithereens and Nectar by Japanese artist JOJI for testing purposes.
          </p>
          <p>Used: HTML, CSS, JavaScript</p>

        </div>
      </div>
    </div>
  );
}

export default Project;
