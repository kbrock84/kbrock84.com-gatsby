import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.justifyCard ? props.justifyCard : "center")};
  padding: 4px;
`;

export default CardWrapper;
