import './App.css';
import React from "react"

import simple_shell from './images/simple_shell.png'
import printf from './images/C-printf-function.png'
import airbnb from './images/airbnb.png'
import recipeat from './images/RecipEat.png'

// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Andrew
            <strong>Kalil</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I do</span>
          <span className="line">Programming</span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">You can call me Andrew.</h4>
            <p>
              I am a Full-Stack Software Engineer currently situated in Barranquilla, Colombia.
            </p>
            <p>
              I am very passionate about technology. I love to try out fun projects that are javascript based (mostly React js). One of my life
              mottos is, "once you put a stop to your drive for learning, you lose everything you ever learned". With this being said, I really
              enjoy learning new things every day. Although I have a lot to learn, I have all of the intention in the world to learn anything necessary
              to get a job done right! One thing that I really look forward to learning one day is Machine learning. Artificial Intelligence is our future,
              and I want to be a contributor to this amazing upcoming future.
            </p>
          </div>
          <div className="title">
            <h3>What I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I program!</h4>
            <p>
              I spend most of my time doing small projects that can enhance my programming skills. I usually work on Front-End with Javascript
              (Specifically ReactJs). I am currently trying to become very skilled with React but I have no problem in learning other framworks
              like VueJs. I also, work with HTML and CSS which are amazing for Front-End projects.
            </p>
            <p>
              I also have knowledge of Back-End programming and configuration. I use frameworks like Flask and Django for creation and configuration
              of APIs. Also, I can work fairly well with manipulation of databases using mySQL and sqlalchemy.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">I am also a learner.</h4>
            <p>
              Although I am technically done with school, I will always feel like a student because I bever want to stop learning. For this reason, 
              I try to take as much advantage as possible of courses available online whether they are paid or not, as long as they enhance my 
              programming knowledge.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} height="350px" width="300px"/>
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've done. These were are programmed during my time studying
             at <a href="https://www.holbertonschool.com" target="_blank" rel="noopener noreferrer">
              Holberton School
            </a>
            , where I studied an intense program for nine months in order to achieve my Full-Stack Developer certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Simple Shell"
            img={simple_shell}
            tech="Bash"
            link="https://unknown-page"
            repo="https://github.com/cbarros7/simple_shell.git"
          >
            <small>
              Built using Bash.
            </small>
            <p>
              This is a low-level programming project that took a lot of careful steps to get right in order to replicate the bash shell.
              This project does not have a try it link but you can access the code from the repo with the sorce button.
            </p>
          </Project>
          <Project
            title="Printf"
            img={printf}
            tech="c bash"
            link="https://unknown-page"
            repo="https://github.com/AndrewKalil/printf.git"
          >
            <small>
              Built using C and Bash.
            </small>
            <p>
              Another roject created to replicate the c printf function.This project does not have a try it link but you can access the 
              code from the repo with the sorce button.
            </p>
          </Project>
          <Project
            title="AirBnB Clone"
            img={airbnb}
            tech="HTML CSS Javascript MySQL Python Flask"
            link="https://unknown-page"
            repo="https://github.com/hfsantiago/AirBnB_clone_v4.git"
          >
            <small>Built using HTML, CSS, Javascript, MySQL, and Python with frameworks like Flask.</small>
            <p>
              A full-stack website that replicates an AirBnB and handles users who want to rent an appartment for a trip or other reasons. This project does not 
              have a try it link but you can access the code from the repo with the sorce button
            </p>
          </Project>
          <Project
            title="RecipEat"
            img={recipeat}
            tech="ReactJs CSS HTML MongoDB Python serverless"
            link="https://www.recipeat.social//"
            repo="https://github.com/RecipEat/Front-End.git"
          >
            <small>Built using ReactJs, CSS, HTML, MongoDB, Python and serverless.</small>
            <p>This is my portfolio project which I am so proud to showcase. It is an independent porject which I worked on along with a group of
              4 other memebers. The application allows users to create recipes and look for recipes for based on the ingredients in your immediate availability.
              The project is still under development but it is coming along very well.</p>
          </Project>
        </div>
      </div>
    </section>
  );
};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the following mediums to contact me:
            </p>
            <br/>
            <ul>
              <li><p className="subtitle"><a style={{color: "cyan"}} href="https://twitter.com/AndrewKalil1">Twitter</a></p></li>
              <li><p className="subtitle"><a style={{color: "skyBlue"}} href="https://www.facebook.com/andrew.k.ortiz">Facebook</a></p></li>
              <li><p className="subtitle"><a style={{color: "blue"}} href="https://www.linkedin.com/in/andrew-kalil-a011ba1a1/">LinkedIn</a></p></li>
              <li><p className="subtitle"><a style={{color: "green"}} href="https://github.com/AndrewKalil/">Github</a></p></li>
            </ul>
            <br/>
            <p className="subtitle">
              You can also email me at andrew_kalil@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Andrew Kalil.</p>
        <p>Credits to <a href="https://twitter.com/yagoestevez">Yago Estévez</a> for this amazing portfolio Idea</p>
      </div>
    </footer>
  );
};




// /***********************
//   Social Links Component
//  ***********************/

// const SocialLinks = props => {
//   return (
//     <div className="social">
//       <a
//         href="https://twitter.com/AndrewKalil1"
//         target="_blank"
//         rel="noopener noreferrer"
//         title="Link to author's Twitter profile"
//       >
//         {' '}
//         <i className="fab fa-twitter" />
//       </a>
//       <a
//         id="profile-link"
//         href="https://github.com/AndrewKalil"
//         target="_blank"
//         rel="noopener noreferrer"
//         title="Link to author's GitHub Profile"
//       >
//         {' '}
//         <i className="fab fa-github" />
//       </a>
//     </div>
//   );
// };



/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}


export default App;
