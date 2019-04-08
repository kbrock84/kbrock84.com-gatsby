import styled from "styled-components";

const BodyWrapper = styled.div<{
  readonly mobile: boolean;
}>`
  background-color: #eeeeee;
  display: grid;
  width: 100vw;
  grid-template-columns: auto;
  ${props => (props.mobile ? "padding-top: 70px;" : "padding-left: 78px")}
`;

export default BodyWrapper;
