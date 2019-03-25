import styled from "styled-components";

const BodyWrapper = styled.div`
  background-color: #eeeeee;
  display: grid;
  width: 100vw;
  grid-template-columns: auto;
  grid-gap: ${props => (props.isHome ? "32px" : "0")};
  ${props => (props.mobile ? "padding-top: 78px;" : "padding-left: 78px")}
`;

export default BodyWrapper;
