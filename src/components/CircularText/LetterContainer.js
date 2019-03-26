import styled from "styled-components";

const LetterContainer = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 8px;
  line-height: ${props => props.fontSize};
  vertical-align: text-bottom;
  font-family: monospace;
  font-size: ${props => props.fontSize};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: ${props => props.r}px;
  color: ${props => props.color};
  transform-origin: top center;
`;

export default LetterContainer;
