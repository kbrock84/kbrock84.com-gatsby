import styled from "styled-components";

const MenuListWrapper = styled.div`
  padding-left: ${props => props.padding + "px"};
  height: ${props => (props.collapsed ? "0px" : props.expandTo + "px")};
  transform: scaleY(${props => (props.collapsed ? "0" : "1")});
  overflow: hidden;
  transition: all 100ms;
`;

export default MenuListWrapper;
