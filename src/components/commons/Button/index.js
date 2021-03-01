import styled, { css } from 'styled-components';
import get from 'lodash/get';
import {breakpoints, propToStyle } from '../../../theme/utils';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 10px 26px;
  font-weight: bold;
  opacity: 1;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  ${({ghost}) => ghost ? ButtonGhost : ButtonDefault }

  &:hover, &:focus {
    opacity: .5;
  }

  ${TextStyleVariants.paragraph1Bold}

  ${propToStyle('margin')};
  ${propToStyle('display')};
  ${propToStyle('height')};
`;