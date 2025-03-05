import { styled } from "styled-components";

const StyledHeader = styled.header`
  padding: 1.5vh 1.5vw;
  color: #cee3ff;
`;

const Title = styled.h1`
  margin: 0;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const BodyText = styled.p`
  margin: 0;
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Title>Dennis Chen</Title>
      <BodyText>My online resume</BodyText>
    </StyledHeader>
  );
}
