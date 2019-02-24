import styled from "styled-components";

const MainMenuWrapper = styled.div`
  width: ${props => (props.mobile ? "fill" : props.width + "px")};
  background-color: #333333;
  height: ${props => (props.mobile ? "70px" : "100vh")};
  padding: 16px;
  margin: 0;
  transition: transform 500ms;
  transform: translate(
    ${props => (props.visible || props.mobile ? 0 : -1 * props.width + 70)}px,
    0
  );
`;

export default MainMenuWrapper;
