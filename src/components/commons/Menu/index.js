import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuContainer } from './styles/MenuContainer';
import Link from 'next/link';
import { Button } from '../Button';


export default function Menu() {

  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    }
  ];

  return (
    <MenuContainer>
      <MenuContainer.Left>
        <Logo />
      </MenuContainer.Left>
      <MenuContainer.Center>
        {links.map(({ text, url}) => (
          <li key={url}>
            <Link href={url}>
              {text}
            </Link>
          </li>
        ))}
      </MenuContainer.Center>
      <MenuContainer.Right>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuContainer.Right>
    </MenuContainer>
  )
}