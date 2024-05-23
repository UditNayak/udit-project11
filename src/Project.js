import Logo from "./img/logo.png";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Gmail from "./img/gmail.png";
import Leetcode from "./img/leetcode.png";
import Demo from "./img/demo.png";
import Project1 from "./img/project1.png";
import Project2 from "./img/project2.png";
import Project3 from "./img/project3.png";
import Project4 from "./img/project4.png";
function Project() {
  return (
    <div>
      <h1 style={{ color: "green" }}>Header Seaction of Project</h1>
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
      <h1 style={{ color: "green" }}>Body section</h1>
      <div>
        <h2>My <strong style={{ color: "purple" }}>Projects</strong></h2>
        <div>
            <img src={Project1} alt="Project1" width="400" height="400" />
            <h3>Wiggles</h3>
            <p>An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.</p>
            <img src={Github} alt="Github" width="40" height="40" />
            <p>github</p>
            <img src={Demo} alt="Demo" width="40" height="40" />
            <p>demo</p>
        </div>
        <div>
            <img src={Project2} alt="Project2" width="400" height="400" />
            <h3>Newsletter</h3>
            <p>A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.</p>
            <img src={Demo} alt="Demo" width="40" height="40" />
            <p>demo</p>
        </div>
        <div>
            <img src={Project3} alt="Project3" width="400" height="400" />
            <h3>RogFree</h3>
            <p>A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.</p>
            <img src={Github} alt="Github" width="40" height="40" />
            <p>github</p>
            <img src={Demo} alt="Demo" width="40" height="40" />
            <p>demo</p>
        </div>
        <div>
            <img src={Project4} alt="Project4" width="400" height="400" />
            <h3>Tindog</h3>
            <p>This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.</p>
            <img src={Github} alt="Github" width="40" height="40" />
            <p>github</p>
            <img src={Demo} alt="Demo" width="40" height="40" />
            <p>demo</p>
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

export default Project;
