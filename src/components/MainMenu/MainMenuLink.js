import styled from "styled-components";
import { Link } from "gatsby";

const MainMenuLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;
`;

export default MainMenuLink;
