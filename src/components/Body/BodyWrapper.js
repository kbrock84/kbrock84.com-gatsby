import styled from "styled-components";

const BodyWrapper = styled.div`
  background-color: #eeeeee;
  display: grid;
  width: 100vw;
  @media (min-width: 769px), (orientation: landscape) {
    ${props =>
      props.isHome
        ? "grid-template-columns: auto"
        : "grid-template-columns: 78px auto"};
  }
  grid-gap: ${props => (props.isHome ? "32px" : "0")};

  @media (max-width: 766px) {
    ${props => (!props.isHome ? "display: flex; flex-direction: column;" : "")}
  }

  @media screen and (max-device-width: 768) and (orientation: portrait) {
    ${props => (!props.isHome ? "display: flex; flex-direction: column;" : "")}
  }
`;

export default BodyWrapper;
