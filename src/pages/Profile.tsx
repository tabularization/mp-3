import { styled } from "styled-components";

const StyledProfile = styled.main`
  padding: 3.5vh 3.5vw;
  width: 70%;
  min-height: 100vh;
  background-color: #051320;
  font-weight: 500;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 2vh 2vw;
    min-height: 95vh;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: first;
`;

const StyledImage = styled.img`
  max-width: 70%;
  border-radius: 5px;
  margin: 6vh 0 4vh 0;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    margin: 4vh 0 3vh 0;
  }
`;

const Paragraph = styled.p`
  font-size: calc(1.5vh + 3px);
  max-width: 80%;
  line-height: 1.5;

  @media screen and (max-width: 750px) {
    max-width: 100%;
    padding: 0 2vw;
  }
`;

export default function Profile() {
  return (
    <StyledProfile>
      <h1>Hello, I'm Dennis 👋</h1>
      <ProfileContainer>
        <StyledImage src="/profilePic.jpeg" alt="Picture of me at M.E.T" />
        <Paragraph>
          Hi, my name is Dennis! I’m currently a junior at Boston University, pursuing a degree in Computer Science. My
          passion lies in developing full-stack web applications and working with databases. Beyond coding, I enjoy
          traveling to new places, experimenting in the kitchen, and finding unique pieces while shopping. I’m always
          eager to learn new technologies, take on challenging projects, and collaborate with others to build innovative
          software solutions. Feel free to explore my skills, experiences, and projects!
        </Paragraph>
      </ProfileContainer>
    </StyledProfile>
  );
}
