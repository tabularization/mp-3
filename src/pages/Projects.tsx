import { styled } from "styled-components";
import { useEffect } from "react";
import Calculator from "../components/Calculator";

const ProjectsContainer = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ProjectsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProjectItem = styled.li`
  padding: 3vh 0;
`;

const BulletedPointItem = styled.li`
  list-style-type: disc;
  padding: 0;
  margin: 1vh 0 0 1vw;
  font-weight: 300;
  font-size: calc(1vh + 5px);
  color: #f0f0f0;

  @media screen and (max-width: 750px) {
    font-size: 1.5vh;
  }
`;

const ProjectLink = styled.a`
  text-decoration: underline;
  color: #cee3ff;
`;

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | My Resume";
  }, []);
  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      <ProjectsList>
        <ProjectItem>
          <h3>
            <ProjectLink
              href="https://github.com/tabularization/stock-notify"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flight Finder | Python, Flask, SQL, Docker
            </ProjectLink>
          </h3>
          <ProjectsList>
            <BulletedPointItem>
              Built an application integrating Amadeus API to provide real-time flight data and pricing with secure user
              account management using SQLite and bcrypt.
            </BulletedPointItem>
            <BulletedPointItem>
              Designed and documented RESTful API endpoints and containerized the application with Docker for
              deployment.
            </BulletedPointItem>
            <BulletedPointItem>
              Implemented caching mechanisms to reduce API call latency and improve application performance.
            </BulletedPointItem>
          </ProjectsList>
        </ProjectItem>

        <ProjectItem>
          <h3>
            <ProjectLink
              href="https://github.com/tabularization/bostonhacks2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tale Craft | JavaScript, HTML, CSS, Python, Flask, Docker
            </ProjectLink>
          </h3>
          <ProjectsList>
            <BulletedPointItem>
              Developed a full-stack storytelling web application that uses OpenAI’s API to enable dynamic user-driven
              narratives.
            </BulletedPointItem>
            <BulletedPointItem>
              Led a team of four developers at BostonHacks2023, earning recognition for technical innovation and
              creativity among 150+ participants.
            </BulletedPointItem>
            <BulletedPointItem>
              Designed the user interface with real-time feedback, improving story continuity and engagement.
            </BulletedPointItem>
          </ProjectsList>
        </ProjectItem>
      </ProjectsList>

      <Calculator />
    </ProjectsContainer>
  );
}
