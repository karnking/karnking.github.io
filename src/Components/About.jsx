import React from "react";
import style from "../styles/about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../resume/Karan-Kotai-Resume.pdf";
import { Text } from "@chakra-ui/react";
export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="about section">
      <Text textAlign={'center'} fontSize={'4xl'}>About</Text>
      <div id="about" className={style.about}>
        <div className={style.image}>
          {/* <BookType /> */}
          <img
            src="https://avatars.githubusercontent.com/u/68837552?v=4"
            alt="profile_img"
            className="home-img"
          />
        </div>
        <div className={style.name}>
          <h1>
            Hello <span id="user-detail-name"><Text>I'm Karan Kotai</Text></span>
          </h1>

          <div className={style.flipBox}>
            <div className={style.flip}>
              <div>
                <div style={{ color: "white" }}>Critical Thinker</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Problem Solver</div>
              </div>
              <div>
                <div style={{ color: "white" }}>Goal Oriented</div>
              </div>
            </div>
          </div>
            {/* <h3 id="">About</h3> */}
          <p id="user-detail-intro">
          An aspiring and self motivated full stack web developer with passion for coding and having 1200+ hours of coding experience. I believe in team work makes dream work and working every day to better interpersonal skills. Looking for a challenging SDE role in a growth-oriented organisation.
          </p>

          <div style={{"display":"flex", flexWrap:"nowrap", justifyContent:"center", alignItems:"center"}}>
            {" "}
          <a
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1pkkMgawxtbA3mYI61robfMhEI3gjEkv0/view?usp=sharing",
                "blank"
                );
              }}
              id="resume-button-2"
              href={Resume}
              download="Karan-Kotai-Resume"
              className={style.ResumeBtn}
              >
            <span></span>
            <span></span>
            <span></span> 
            <span></span>
            Resume
          </a>
              {/* </button> */}
            {/*  */}
            <a
              href="https://github.com/karnking"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
            {/*  */}
            <a
              href="https://www.linkedin.com/in/karan-kotai-1a79a9270/"
              className={style.githubBtn}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
