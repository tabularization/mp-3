import { styled } from "styled-components";

const ExperiencesContainer = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const ExperiencesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ExperiencesItem = styled.li`
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

const Paragraph = styled.p`
  padding: 0.3vh 0;
`;

export default function Experiences() {
  return (
    <ExperiencesContainer>
      <h1>Work Experience</h1>
      <ExperiencesList>
        <ExperiencesItem>
          <h3>
            Incoming Software Engineer at <strong>CVS Health</strong>
          </h3>
          <Paragraph>Summer 2026</Paragraph>
          <Paragraph>New York, United States</Paragraph>
        </ExperiencesItem>

        <ExperiencesItem>
          <h3>
            Network Infrastructure Engineer at <strong>NYC DDC</strong>
          </h3>
          <Paragraph>Jul 2024 - Aug 2024</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <ExperiencesList>
            <BulletedPointItem>
              Integrated PostgreSQL databases with internal spreadsheets using Python and VBA to automate tracking and
              management of employee device migration status and inventory records
            </BulletedPointItem>
            <BulletedPointItem>
              Spearheaded the migration of 750+ devices from legacy systems to modern infrastructure, reducing costs by
              $200K
            </BulletedPointItem>
            <BulletedPointItem>
              Optimized desk phone deployment by mapping distribution paths and retrieving MAC addresses for port
              authorization
            </BulletedPointItem>
          </ExperiencesList>
        </ExperiencesItem>

        <ExperiencesItem>
          <h3>
            Data Analyst at <strong>NYC DYCD</strong>
          </h3>
          <Paragraph>July 2022 - Aug 2022</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <ExperiencesList>
            <BulletedPointItem>
              Analyzed $3M+ in technical training contracts using Python to provide insights to improve program
              effectiveness
            </BulletedPointItem>
            <BulletedPointItem>
              Created Seaborn correlation charts to highlight program performance metrics, driving increased funding for
              underrepresented programs
            </BulletedPointItem>
            <BulletedPointItem>
              Optimized SQL queries to efficiently extract and manipulate data from large datasets for end-user
              applications
            </BulletedPointItem>
          </ExperiencesList>
        </ExperiencesItem>

        <ExperiencesItem>
          <h3>
            Technology Analyst at <strong>Manhattan Community Board 1</strong>
          </h3>
          <Paragraph>July 2021 - Aug 2021</Paragraph>
          <Paragraph>New York, United States</Paragraph>
          <ExperiencesList>
            <BulletedPointItem>
              Evaluated outdoor dining data for 100+ businesses, correlating community complaints with subsequent
              investigations to support data-driven policies presented to the city council
            </BulletedPointItem>
            <BulletedPointItem>
              Developed web scraping tools using BeautifulSoup and Selenium to collect public sentiment data on city
              policies
            </BulletedPointItem>
            <BulletedPointItem>
              Organized and labeled hardware in a centralized database to enhance accessibility for community board
              personnel
            </BulletedPointItem>
          </ExperiencesList>
        </ExperiencesItem>
      </ExperiencesList>
    </ExperiencesContainer>
  );
}
