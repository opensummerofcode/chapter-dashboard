import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@/styles/constants';

const StyledNavItem = styled.li`
  width: 100%;
  padding: 2rem 1rem;
  color: #fff;
  font-size: 1.8rem;
  border-left: 0.5rem solid ${colors.osocGreen};
`;

const NavItem = ({ name, href, isExternal }) => {
  if (isExternal) return null;
  return (
    <StyledNavItem>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </StyledNavItem>
  );
};

NavItem.defaultProps = {
  isExternal: false
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool
};

export default NavItem;
