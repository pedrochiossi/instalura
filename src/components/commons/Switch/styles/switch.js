import styled from "styled-components";


export const SwitchWrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: block;
  user-select: none;
  margin-bottom: 12px;

  input {
    position: absolute;
    cursor: pointer;
    height: 0;
    width: 0;
    opacity: 0;
  }
`;

export const SwitchControl = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 50px;
  border-radius: 12.5px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary.color : theme.colors.tertiary.color};
  transition: background-color 0.2s ease-in;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "30px" : "5px")};
    top: 5px;
    width: 15px;
    height: 15px;
    border-radius: 12.5px;
    background: white;
    transition: left 0.2s ease-in;
  }
`;
