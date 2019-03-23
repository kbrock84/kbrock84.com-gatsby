import styled from "styled-components";

const BodyWrapper = styled.div`
  background-color: #eeeeee;
  display: grid;
  width: 100vw;
  @media (min-width: 769px), (orientation: landscape) {
    ${props =>
      props.isHome
        ? "grid-template-columns: auto"
        : "grid-template-columns: auto"};
    ${props => (props.mobile ? "padding-top: 78px;" : "padding-left: 78px")}
  }
  grid-gap: ${props => (props.isHome ? "32px" : "0")};

  @media (max-width: 766px) {
    ${props =>
      !props.isHome
        ? "display: flex; flex-direction: column; padding-top: 78px;"
        : ""}
  }

  @media screen and (max-device-width: 768) and (orientation: portrait) {
    ${props => (!props.isHome ? "display: flex; flex-direction: column;" : "")}
  }
`;

export default BodyWrapper;
