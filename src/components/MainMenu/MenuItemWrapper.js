import styled from "styled-components";

const MenuItemWrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.color};
  margin: 0.2em;
  padding: 0.2em;
  cursor: pointer;
  ${props => (props.deviders ? "border-bottom: 2px solid #555555;" : "")}
`;

export default MenuItemWrapper;
