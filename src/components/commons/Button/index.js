import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpoints } from '../../../theme/utils/breakpoints';
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
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition};
  ${({ghost}) => ghost ? ButtonGhost : ButtonDefault }

  &:hover, &:focus {
    opacity: .5;
  }

  ${breakpoints({
    xs: css`
      /* All devices */
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      ${TextStyleVariants.paragraph1}
    `
  })}
`;