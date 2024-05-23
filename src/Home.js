import Alien from "./img/alien.png";
import MWC from "./img/man-with-cofee.png";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Gmail from "./img/gmail.png";
import Leetcode from "./img/leetcode.png";
import Logo from "./img/logo.png";
function Home() {
  return (
    <div>
      <h1 style={{ color: "green" }}>Header Seaction</h1>
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
      <section>
        <h2>Hi There!</h2>
        <h2>
          I am <strong style={{ color: "red" }}>Udit Kumar Nayak</strong>
        </h2>
        <h3>Software Developer</h3>
        <h3>MERN Stack Developer</h3>
        <img src={Alien} alt="Alien" width="500" height="400" />
      </section>
      <h1 style={{ color: "green" }}>Body section 2</h1>
      <section>
        <h2>Brief Introduction</h2>
        <p>
          I love the process of changing a raw idea into a website or a product
          that impacts lives. I want to do work that challenges me as a
          developer & work that I can be proud of. I am fluent in C++ and know a
          bit of Python and am working on a few projects in the MERN stack. I
          plan to learn Next.js, Three.js and Typescript in the near future.
          Also, I love coffee
        </p>
        <img src={MWC} alt="MWCoffee" width="500" height="400" />
      </section>
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

export default Home;
