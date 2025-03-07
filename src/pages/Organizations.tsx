import { styled } from "styled-components";
import { useEffect } from "react";

const OrganizationsContainer = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const OrganizationsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OrganizationItem = styled.li`
  padding: 4vh 0;

  @media screen and (max-width: 750px) {
    font-size: 1.5vh;
  }
`;

const Paragraph = styled.p`
  padding: 0.3vh 0;
`;

const SubHeading = styled.h3`
  font-weight: 700;
  margin: 0;
`;

const Summary = styled.p`
  font-weight: 300;
  font-size: calc(1vh + 5px);
  color: #f0f0f0;
  margin-top: 1vh;
`;

export default function Organizations() {
  useEffect(() => {
    document.title = "Organizations | My Resume";
  }, []);
  return (
    <OrganizationsContainer>
      <h1>Professional Organizations</h1>
      <OrganizationsList>
        <OrganizationItem>
          <SubHeading>
            Member at <strong>Major League Hacking (MLH)</strong>
          </SubHeading>
          <Paragraph>2023 - Present</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <Summary>
            Major League Hacking (MLH) is a global community for student hackers, providing access to hackathons,
            technical workshops, and project-based learning. As a participant, I have competed in MLH-affiliated
            hackathons, including BostonHacks 2023, where I collaborated on full-stack projects that emphasized
            innovation and problem-solving.
          </Summary>
        </OrganizationItem>

        <OrganizationItem>
          <SubHeading>
            Member at <strong>Bottomline</strong>
          </SubHeading>
          <Paragraph>2021 - Present</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <Summary>
            Bottomline is a professional network dedicated to supporting students and early-career professionals in
            finance, technology, and business. As a member, I engage in mentorship programs, industry discussions, and
            networking opportunities with professionals.
          </Summary>
        </OrganizationItem>

        <OrganizationItem>
          <SubHeading>
            Alumni of <strong>Ladders for Leaders</strong>
          </SubHeading>
          <Paragraph>2021 - Present</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <Summary>
            Ladders for Leaders is a selective career development program that connects high-achieving students with
            professional internships across various industries. Through the program, I gained hands-on experience in the
            technology sector, attended career workshops, and built a strong network of mentors.
          </Summary>
        </OrganizationItem>
      </OrganizationsList>
    </OrganizationsContainer>
  );
}
