import React from "react";
import styled from "styled-components";
import RedXICon from "../../public/static/svg/auth/red_x_icon.svg";
import GreenCheckIcon from "../../public/static/svg/auth/green_check_icon.svg";
import palette from "../../styles/palette";

const Container = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) =>
    isValid ? palette.davidson_orange : palette.green};
  display: flex;
  align-items: center;
  padding: 2px;
  svg {
    margin-right: 8px;
  }
`;

interface IProps {
  isValid: boolean;
  text: string;
}

const PasswordWarning: React.FC<IProps> = ({ isValid, text }) => {
  return (
    <Container isValid={isValid}>
      {isValid ? <RedXICon /> : <GreenCheckIcon />}
      {text}
    </Container>
  );
};

export default PasswordWarning;
