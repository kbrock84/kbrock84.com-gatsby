import styled from "styled-components";

const NavButtonWrapper = styled.button`
  border: none;
  background: none;
  opacity: 0.3;
  float: right;
  transition: transform 300ms ease-out;
  ${props => "transform: rotate(" + props.rotate + ")"}
`;

export default NavButtonWrapper;
