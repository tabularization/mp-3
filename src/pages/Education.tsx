import { styled } from "styled-components";
import { useEffect } from "react";
const EducationContainer = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 2vh 2vw;
    min-height: 90vh;
  }
`;

const EducationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const EducationItem = styled.li`
  padding: 5vh 0;
  padding: 0 3vw;
  margin: 8vh 0vw;
  border-left: 2px solid #e0e6ed;

  @media screen and (max-width: 750px) {
    padding: 1vh 5vw;
    margin: 5vh 0;
    border-left: none;
    border-left: 2px solid #e0e6ed;
  }
`;

export default function Education() {
  useEffect(() => {
    document.title = "Education | My Resume";
  }, []);
  return (
    <EducationContainer>
      <h1>Education History</h1>
      <EducationList>
        <EducationItem>
          <h3>Boston University</h3>
          <p>B.A. in Computer Science (Expected 2026)</p>
          <p>Boston, MA</p>
        </EducationItem>
        <EducationItem>
          <h3>Baruch College</h3>
          <p>B.B.A. in Finance (September 2022 - May 2023)</p>
          <p>New York, NY</p>
        </EducationItem>
        <EducationItem>
          <h3>CodePath</h3>
          <p>WEB 101: Intro to Web Development (September 2023 - December 2023)</p>
          <p>Remote</p>
        </EducationItem>
        <EducationItem>
          <h3>High School of Telecommunication Arts & Technology</h3>
          <p>High School Diploma (Graduated 2022)</p>
          <p>New York, NY</p>
        </EducationItem>
      </EducationList>
    </EducationContainer>
  );
}
