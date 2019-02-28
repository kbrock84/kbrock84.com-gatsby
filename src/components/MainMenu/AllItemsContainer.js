import styled from "styled-components";

const AllItemsContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  padding-left: 8px;
  height: ${props => (props.collapsed && props.mobile ? "0vh" : "85vh")};
  width: 100%;
  background-color: #1e1e1e;
  opacity: ${props => (props.collapsed && !props.mobile ? "0" : "1")};
  overflow: ${props => (props.mobile ? "scroll" : "hidden")};
  font-size: ${props => (props.mobile ? "1.8em" : "1em")};
  ${props =>
    props.mobile
      ? "transition: height 400ms ease-in-out"
      : "transition: opacity 500ms ease-in-out;"}
`;

export default AllItemsContainer;
