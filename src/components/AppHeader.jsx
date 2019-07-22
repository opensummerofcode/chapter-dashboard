import styled from 'styled-components';
import { colors, dimensions } from '@/styles/constants';
import logo from '@/img/logo/logo-osoc-color.svg';

const Header = styled.header`
  width: 100v;
  height: 7rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 4px 5px -5px ${colors.shadowGray};
`;

const LogoContainer = styled.div`
  width: ${dimensions.sideNav.width};
  height: 90%;
  display: flex;
  align-items: center;
  > div {
    width: 25%;
    text-align: center;
    margin-right: 1rem;
    height: 100%;
  }
  img {
    max-height: 100%;
    width: auto;
  }
  h1 {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const AppHeader = () => (
  <Header>
    <LogoContainer>
      <div>
        <img src={logo} alt="open Summer of code logo" />
      </div>
      <h1>open Summer of code</h1>
    </LogoContainer>
  </Header>
);

export default AppHeader;
