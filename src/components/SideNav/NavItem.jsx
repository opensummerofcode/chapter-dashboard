import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@/styles/constants';

const StyledNavItem = styled.li`
  width: 100%;
  padding: 2rem 1rem;
  color: #fff;
  font-size: 1.8rem;
  border-left: ${props =>
    props.active ? `0.5rem solid ${colors.osocGreen}` : `0.5rem solid ${colors.osocBlue}`};
  background-color: ${props => (props.active ? colors.osocBlueLighter : 'inherit')};
`;

const NavItem = ({ name, page, isExternal, edition, active }) => {
  if (isExternal) {
    return (
      <StyledNavItem>
        <Link href={page}>
          <a target="_blank">{name}</a>
        </Link>
      </StyledNavItem>
    );
  }
  return (
    <StyledNavItem active={active}>
      <Link href={`/[edition]/${page}`} as={`/${edition}/${page}`}>
        <a>{name}</a>
      </Link>
    </StyledNavItem>
  );
};

NavItem.defaultProps = {
  isExternal: false,
  active: false
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  active: PropTypes.bool,
  isExternal: PropTypes.bool,
  edition: PropTypes.string.isRequired
};

export default NavItem;
