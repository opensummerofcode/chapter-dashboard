import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faProjectDiagram,
  faHandshake,
  faGraduationCap,
  faCalendarAlt,
  faVideo,
  faUsers,
  faBook,
  faCog,
  faFirstAid
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  home: faHome,
  coaches: faFirstAid,
  projects: faProjectDiagram,
  handshake: faHandshake,
  students: faGraduationCap,
  calendar: faCalendarAlt,
  demo: faVideo,
  users: faUsers,
  wiki: faBook,
  settings: faCog
};

const StyledIcon = styled.i`
  margin-right: 1rem;
`;

const Icon = ({ icon }) => (
  <StyledIcon>
    <FontAwesomeIcon icon={icons[icon]} />
  </StyledIcon>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
