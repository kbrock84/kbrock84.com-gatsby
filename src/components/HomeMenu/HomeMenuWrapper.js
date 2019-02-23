import styled from "styled-components";

const HomeMenuWrapper = styled.div`
  margin: auto;
  background-image: url(${props => props.menuImage});
  background-repeat: no-repeat;
  background-position: center center;
`;

export default HomeMenuWrapper;
