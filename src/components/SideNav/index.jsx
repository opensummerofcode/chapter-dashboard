import { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavItem from './NavItem';
import { colors, dimensions } from '@/styles/constants';
import EditionContext from '@/context/edition-context';

const Nav = styled.nav`
  height: ${dimensions.sideNav.height};
  width: 20vw;
  background-color: ${colors.osocBlue};
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const SideNav = () => {
  const router = useRouter();
  const { selectedEdition } = useContext(EditionContext);

  const baseURL = `/${selectedEdition}`;
  const navItems = [
    {
      name: 'Overview',
      href: `${baseURL}/overview`
    },
    {
      name: 'Projects',
      href: `${baseURL}/projects`
    },
    {
      name: 'Coaches',
      href: `${baseURL}/coaches`
    },
    {
      name: 'Students',
      href: `${baseURL}/students`
    },
    {
      name: 'Calendar & Location',
      href: `${baseURL}/practical`
    },
    {
      name: 'Demo day',
      href: `${baseURL}/demo-day`
    },
    {
      name: 'oSoc wiki',
      href: `https://help.osoc.be/global`,
      isExternal: true
    },
    {
      name: 'Settings',
      href: `${baseURL}/settings`
    }
  ];

  const $navItems = navItems.map(i => (
    <NavItem key={i.name} active={router.pathname === i.href} {...i} />
  ));
  return (
    <Nav>
      <NavList>{$navItems}</NavList>
    </Nav>
  );
};

export default SideNav;
