import React from 'react';
import { Logo } from '../../../theme/Logo';
import { MenuContainer } from './styles/MenuContainer';
import Link from 'next/link';


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
        {links.map(({ text, url}, i) => (
          <li key={`${text}-${i}`}>
            <Link href={url}>
              {text}
            </Link>
          </li>
        ))}
      </MenuContainer.Center>
      <MenuContainer.Right>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuContainer.Right>
    </MenuContainer>
  )
}