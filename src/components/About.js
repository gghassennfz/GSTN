// About.js
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import userImage from "./user.png"; // Adjust the path according to your folder structure

const About = () => {
  return (
    <section id="about" className="container text-center">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About Me
          </h2>
          <div className="profile-image-container">
            <img
              src={userImage} // Use the imported image here
              alt="geek pic"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <p className="section-description mt-4">
          I am a dedicated web developer specializing in full-stack development, with over 6 months of hands-on experience in designing and implementing user-friendly web applications. My expertise includes a strong command of technologies such as Node.js, Java, JSP, HTML, CSS, and Bootstrap. Known for my problem-solving abilities, I strive to create responsive and efficient solutions that enhance user experiences and drive engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
