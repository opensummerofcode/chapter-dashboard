import Link from 'next/link';
import PropTypes from 'prop-types';

const NavItem = ({ name, href, isExternal }) => {
  if (isExternal) return null;
  return (
    <li>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
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
