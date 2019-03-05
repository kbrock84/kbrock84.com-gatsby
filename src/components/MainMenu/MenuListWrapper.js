import styled from "styled-components";

const MenuListWrapper = styled.div`
  padding-left: ${props => props.padding + "px"};
  overflow: hidden;
  height: ${props => (props.expanded ? props.expandTo + "px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 100ms;
  min-width: 260px;
  transform: scaleY(${props => (props.collapsed ? "0" : "1")});
`;

export default MenuListWrapper;
