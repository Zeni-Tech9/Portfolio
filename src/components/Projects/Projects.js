import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MiniMusicPlayer from "../../Assets/Projects/Mini Music Player.png";
import Weather from "../../Assets/Projects/Weather.png";
import CurrencyConverter from "../../Assets/Projects/Currency Concerter.png";
import Calculater from "../../Assets/Projects/Calculater.png";
import PasswordGenerator from "../../Assets/Projects/Password generator.png";
import StopWatch from "../../Assets/Projects/Stop Watch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculater}
              title="Calculater"
              description="To create a calculator, you use HTML to structure the display and buttons, CSS to style its appearance, and JavaScript to handle button clicks, update the display, and perform the calculations."
              ghLink="https://github.com/Zeni-Tech9/Calculater-JS-.git"
              demoLink="https://calculaterforpractice.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              title="Stop Watch"
              description="To create a stopwatch, you use HTML to structure the display, CSS to style it, and JavaScript to track time, update the display, and handle start,stop,reset controls."
              ghLink="https://github.com/Zeni-Tech9/Stop-Watch-JS-.git"
              demoLink="https://stopwatchinjavascript.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MiniMusicPlayer}
              title="Mini Music Player"
              description="To create a mini music player, you use HTML for the interface, CSS for styling, and JavaScript to control audio playback, update the interface, and respond to user input."
              ghLink="https://github.com/Zeni-Tech9/Mini-Music-Player-JS-.git"
              demoLink="https://minimusicplayerinjs.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CurrencyConverter}
              title="Currency Converter"
              description="To create a currency converter, you use HTML for the interface, CSS for styling, and JavaScript Libarary(React.js) to fetch exchange rates, perform conversions, and update the display."
              ghLink="https://github.com/Zeni-Tech9/CurrencyConverter-React.git"
              demoLink="https://currencyconverterinreacts.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PasswordGenerator}
              title="Password Generator"
              description="To create a password generator, you use HTML to structure the interface,CSS to style it, and JavaScript libarary(React.js) to generate random passwords based on user input, such as desired length and character types."
              ghLink="https://github.com/Zeni-Tech9/Password-Generater-React.git"
              demoLink="https://passwordgeneraterinreact.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              title="Weather"
              description="To create a weather app, you use HTML for the structure, CSS for styling, and JavaScript libarary (React.js) for handling user input, fetching weather data from APIs, and dynamically updating the display."
              ghLink="https://github.com/Zeni-Tech9/Weather-App-React.git"
              demoLink="https://weatherappinreacts.netlify.app" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
