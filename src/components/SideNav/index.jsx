import { useContext } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import EditionContext from '../../context/edition-context';

const Nav = styled.nav``;

const SideNav = () => {
  const { selectedEdition } = useContext(EditionContext);

  const baseURL = `/chapter/${selectedEdition}`;
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

  const $navItems = navItems.map(i => <NavItem {...i} />);
  return (
    <Nav>
      <ul>{$navItems}</ul>
    </Nav>
  );
};

export default SideNav;
