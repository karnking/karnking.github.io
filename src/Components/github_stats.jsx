import style from "../styles/statistics.module.css";
import GitHubCalendar from "react-github-calendar";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useColorMode } from "@chakra-ui/react";

export default function GithubStats() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const { colorMode } = useColorMode();

  return (
    <>
      {" "}
      <div className={style.outer_box}>

        <h1 className={style.main_heading}>My Statistics</h1>


        <div className={style.flex_box}>
          <div data-aos="zoom-in" >
            <img
              src={
                colorMode === "dark"
                  ? "https://github-readme-streak-stats.herokuapp.com?user=karnking&theme=dark"
                  : "https://github-readme-streak-stats.herokuapp.com?user=karnking"
              }
              alt="stats"
              id="github-streak-stats"

            />
          </div>
          <div data-aos="zoom-in">
            <img
              id="github-stats-card"
              src={
                colorMode === "dark"
                  ? "https://github-readme-stats.vercel.app/api?username=karnking&theme=dark"
                  : "https://github-readme-stats.vercel.app/api?username=karnking"
              }
              alt="contribution"
            />
          </div>
        </div>
        <div className={style.flex_box}>
        <div data-aos='zoom-out'>
          <img
            src={
              colorMode === "dark"
                ? "https://github-readme-stats.vercel.app/api/top-langs/?username=karnking&theme=dark"
                : "https://github-readme-stats.vercel.app/api/top-langs/?username=karnking"
            }
            alt="Top Lang"
            id="github-top-langs"
          />
        </div>
        <div data-aos='zoom-out'>
        <img
          src={
            colorMode === "dark"
              ? "https://github-readme-stats.vercel.app/api/top-langs/?username=karnking&theme=dark&layout=donut"
              : "https://github-readme-stats.vercel.app/api/top-langs/?username=karnking&layout=donut"
          }
          alt="Top Lang"
          id="github-top-langs"
        />
        </div>
      </div>
      </div>

      <div className={style.outer_box}>

        <h1 className={style.main_heading}>My Github Calender</h1>

        <div data-aos="fade-up" className={style.Calendar}>
          <GitHubCalendar year='last' username="karnking" />
        </div>
      </div>
      <div className={style.outer_box}>

        <h1 className={style.main_heading}>Github Contribution Graph</h1>

        <div className={style.graph}>

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=karnking&theme=react-dark"
            alt=""
          />

        </div>
      </div>
    </>
  );
}
