import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  padding: 2vh 2vw;
  color: #cee3ff;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All Rights Reserved by Dennis Chen <Link to="/credits">Credits</Link> &copy;
      </p>
    </StyledFooter>
  );
}
