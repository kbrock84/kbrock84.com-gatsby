import styled from "styled-components";

const MenuListWrapper = styled.div`
  padding-left: ${props => props.padding + "px"};
  max-height: ${props => (props.collapsed ? "0px" : "10000px")};
  transform: scaleY(${props => (props.collapsed ? "0" : "1")});
  overflow: hidden;
  transition-property: transform, max-height;
  transition-duration: 100ms, 30ms;
`;

export default MenuListWrapper;
