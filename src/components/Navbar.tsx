import { styled } from "styled-components";
import { Link } from "react-router";

const StyledNav = styled.nav`
  width: 30%;
  padding: 0 1.5vw;
  font-weight: 700;
  font-size: calc(5px + 1.3vw);
  color: #cee3ff;

  @media screen and (max-width: 750px) {
    width: 100%;
    text-align: center;
    padding: 1vh 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1vw;
    overflow-x: auto;
  }
`;

const NavItem = styled.li`
  padding: 5vh 0;
  list-style: none;

  @media screen and (max-width: 750px) {
    padding: 1vh 1vw;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding: 0;
  padding: 5vh 0;

  @media screen and (max-width: 750px) {
    padding: 1vh 1vw;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/education">Education</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/experiences">Experiences</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/projects">Projects</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/organizations">Organizations</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/references">References</StyledLink>
        </NavItem>
      </NavList>
    </StyledNav>
  );
}
