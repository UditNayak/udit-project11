import Logo from "./img/logo.png";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Gmail from "./img/gmail.png";
import Leetcode from "./img/leetcode.png";
import MWL from "./img/man-with-laptop.png";
import React from "./img/react.png";
import Node from "./img/node.png";
import Express from "./img/express.png";
import Leaf from "./img/leaf.png";
import Git from "./img/git.png";
import GithubIcon from "./img/github-icon.png";
import Js from "./img/js.png";
import Cpp from "./img/cpp.png";
import Postman from "./img/postman.png";
import Gola from "./img/gola.png";
import Triangle from "./img/triangle.png";
import Npm from "./img/npm.png";
import B from "./img/b.png";

function About() {
  return (
    <div>
      <h1 style={{ color: "green" }}>Header Seaction of About</h1>
      <header>
        <img src={Logo} alt="Logo" width="100" height="100" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/project">Projects</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1 style={{ color: "green" }}>Body section 1</h1>
      <div>
        <h2>
          Get to <strong style={{ color: "purple" }}>know</strong> me!
        </h2>
        <p>
          Hi, my name is{" "}
          <strong style={{ color: "purple" }}>Devansh Sahni</strong> and I am
          from New Delhi, India. I'm a{" "}
          <strong style={{ color: "purple" }}>MERN stack web developer</strong>{" "}
          and a final year college student pursuing{" "}
          <strong style={{ color: "purple" }}>BTech in CSE</strong>. I have done
          an internship as a{" "}
          <strong style={{ color: "purple" }}>software developer</strong> at
          GoalFi which is a fintech startup. I love to create original projects
          with beautiful designs, you can check out some of my work in the
          projects section. I am
          <strong style={{ color: "purple" }}>open</strong> to new
          collaborations or work where I can contribute and grow. Feel free to
          connect with me, links are in the footer. Apart from coding I love to
          do photography, you can check out some of my shots here
          <strong style={{ color: "purple" }}> Instagram</strong>.
        </p>
        <img src={MWL} alt="MWL" width="500" height="400" />
      </div>
      <h1 style={{ color: "green" }}>Body section 2</h1>
      <div>
        <h3>Professional Skills</h3>
        <div>
          <img src={React} alt="React" width="100" height="100" />
          <img src={Node} alt="Node" width="100" height="100" />
          <img src={Express} alt="Express" width="100" height="100" />
          <img src={Leaf} alt="Leaf" width="100" height="100" />
          <img src={Git} alt="Git" width="100" height="100" />
          <img src={GithubIcon} alt="GithubIcon" width="100" height="100" />
          <img src={Js} alt="Js" width="100" height="100" />
          <img src={Cpp} alt="Cpp" width="100" height="100" />
          <img src={Postman} alt="Postman" width="100" height="100" />
          <img src={Gola} alt="Gola" width="100" height="100" />
          <img src={Triangle} alt="Triangle" width="100" height="100" />
          <img src={Npm} alt="Npm" width="100" height="100" />
          <img src={B} alt="B" width="100" height="100" />
        </div>
      </div>
      <h1 style={{ color: "green" }}>Footer Section</h1>
      <footer>
        <h6>Developed by Udit Kumar Nayak</h6>
        <h6>Copyright © 2023 DS</h6>
        <a href="github.com">
          <img src={Github} alt="Github" width="40" height="40" />
        </a>
        <a href="linkedin.com">
          <img src={LinkedIn} alt="LinkedIn" width="40" height="40" />
        </a>
        <a href="gmail.com">
          <img src={Gmail} alt="Gmail" width="40" height="40" />
        </a>
        <a href="leetcode.com">
          <img src={Leetcode} alt="Leetcode" width="40" height="40" />
        </a>
      </footer>
    </div>
  );
}

export default About;
