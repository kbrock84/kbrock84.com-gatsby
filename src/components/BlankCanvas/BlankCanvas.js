import styled from "styled-components";

const BlankCanvas = styled.canvas`
  display: block;
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  pointer-events: none;
`;

export default BlankCanvas;
