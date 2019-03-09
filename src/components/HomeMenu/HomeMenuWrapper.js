import styled from "styled-components";

const HomeMenuWrapper = styled.div`
  /* align-items: center; */
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: 769px), (orientation: landscape) {
    background-image: url(${props => props.menuImageSet[1]});
  }

  @media (max-width: 766px) {
    background-image: url(${props => props.menuImageSet[0]});
  }

  @media screen and (max-device-width: 768) and (orientation: portrait) {
    background-image: url(${props => props.menuImageSet[1]});
  }
`;

export default HomeMenuWrapper;
