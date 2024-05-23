import Logo from "./img/logo.png";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Gmail from "./img/gmail.png";
import Leetcode from "./img/leetcode.png";
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
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1 style={{ color: "green" }}>Body section 1</h1>
      <h1 style={{ color: "green" }}>Body section 2</h1>
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
