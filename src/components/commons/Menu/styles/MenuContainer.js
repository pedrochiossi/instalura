import styled, { css } from 'styled-components';
import { breakpoints } from '../../../../theme/utils/breakpoints';
import { TextStyleVariants } from '../../../foundation/Text';

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpoints({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
      padding: 0 70px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

MenuContainer.Left = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpoints({
    md: css`
        width: 131px;
        height: 45px;
      `,
  })}
  ${breakpoints({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuContainer.Center = styled.div`
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid ${({ theme }) => theme.colors.borders.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.color};
  padding: 12px;
  ${breakpoints({
    md: css`
      max-width: 332px;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      margin-left: 50px;
    `,
  })}
  
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary.color};
    transition: 200ms ease-in-out;
    ${breakpoints({
    xs: css`
        ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}

    &:hover, &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.tertiary.main.color};
    }
  }
`;

MenuContainer.Right = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  margin-left: auto;
  ${breakpoints({
    md: css`
      order: initial;
    `,
  })}
`;
