import styled, { css } from 'styled-components';
import { breakpoints } from '../../utils'

export const LogoSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.logo.color };
  ${breakpoints({
    xs: css`
      width: 96px
    `,
    md: css`
      width: 131px
    `
  })}
`;