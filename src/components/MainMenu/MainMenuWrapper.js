import styled from "styled-components";

const MainMenuWrapper = styled.div`
  width: ${props => (props.mobile ? "100vw" : props.width + "px")};
  background-color: #0f0f0f;
  height: ${props => (props.mobile ? "70px" : "100vh")};
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 1000000;
  transition: transform 500ms;
  transform: translate(
    ${props => (props.visible || props.mobile ? 0 : -1 * props.width + 70)}px,
    0
  );
`;

export default MainMenuWrapper;
