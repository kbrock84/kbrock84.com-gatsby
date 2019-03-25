import styled from "styled-components";

const HomeMenuItem = styled.div`
  border: none;
  border-radius: ${props => props.r}px;
  width: ${props => props.r * 2}px;
  height: ${props => props.r * 2}px;
  font-size: ${props => (props.mobile ? "0.7em" : "0.9em")};
  line-height: 1.2em;
  color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 4px 18px 8px rgba(0, 0, 0, 0.15);
  background-image: linear-gradient(
    40deg,
    #ff0077,
    #ff0007 -25%,
    #ff0077,
    125%,
    #ff0007
  );
`;

export default HomeMenuItem;
