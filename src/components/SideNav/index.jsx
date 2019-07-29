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

  const navItems = [
    {
      name: 'Overview',
      page: 'overview',
      icon: 'home'
    },
    {
      name: 'Projects',
      page: 'projects',
      icon: 'projects'
    },
    {
      name: 'Coaches',
      page: 'coaches',
      icon: 'coaches'
    },
    {
      name: 'Students',
      page: 'students',
      icon: 'students'
    },
    {
      name: 'Calendar & Location',
      page: 'practical',
      icon: 'calendar'
    },
    {
      name: 'Demo day',
      page: 'demo-day',
      icon: 'demo'
    },
    {
      name: 'oSoc wiki',
      page: 'https://help.osoc.be/global',
      isExternal: true,
      icon: 'wiki'
    },
    {
      name: 'Settings',
      page: 'settings',
      icon: 'settings'
    }
  ];

  const $navItems = navItems.map(i => (
    <NavItem
      key={i.name}
      edition={selectedEdition}
      active={router.asPath === `/${selectedEdition}/${i.page}`}
      {...i}
    />
  ));

  return (
    <Nav>
      <NavList>{$navItems}</NavList>
    </Nav>
  );
};

export default SideNav;
