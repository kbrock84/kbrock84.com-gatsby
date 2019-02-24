import styled from "styled-components";

const AllItemsContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  padding-left: 8px;
  padding-top: 8px;
  height: ${props => (props.collapsed && props.mobile ? "0px" : "85vh")};
  width: 100%;
  background-color: #3f3f3f;
  overflow: ${props => (props.mobile ? "scroll" : "hidden")};
  font-size: ${props => (props.mobile ? "1.5em" : "1em")};
  ${props => (props.mobile ? "transition: height 500ms ease-in-out;" : "")}
`;

export default AllItemsContainer;
