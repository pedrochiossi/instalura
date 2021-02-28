import styled from 'styled-components';

export const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
`;

MenuContainer.Left = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
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
  
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary.color};
    transition: 200ms ease-in-out;

    &:hover, &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.tertiary.main.color};
    }
  }
`;

MenuContainer.Right = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
`;
