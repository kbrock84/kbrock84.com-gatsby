import styled from "styled-components";

const ContactCard = styled.div<{ mobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  ${props => (props.mobile ? "" : "padding-left: 16px")}
`;

export default ContactCard;
