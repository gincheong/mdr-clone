import styled from 'styled-components';
// Components
import HeaderSearchBar from './HeaderSearchBar';
import { CustomButton, Tooltip } from '../../components';
// Hooks
import { useRouteName } from '../../hooks';

const StyledHeader = styled.header`
  padding: 20px;
  margin: 0 10px 0 10px;
  display: flex;
`;

const StyledHeaderTitle = styled.div`
  font-size: 20px;
  flex: 1;
`;

const Header = () => {
  const routeName = useRouteName();

  return (
    <StyledHeader>
      <StyledHeaderTitle>{routeName}</StyledHeaderTitle>
      <HeaderSearchBar />
      <CustomButton rippleColor='dark'>
        <i className="fas fa-th-large"></i>
      </CustomButton>
      <Tooltip
        direction="bottom"
        tooltipChildren={
          <CustomButton rippleColor='dark'>
            asd
          </CustomButton>
        }
      >
        <CustomButton rippleColor='dark'>
          <i className="fas fa-bell"></i>
        </CustomButton>
      </Tooltip>
      <Tooltip
        direction="bottom"
        tooltipChildren={
          <CustomButton rippleColor='dark'>
            asd
          </CustomButton>
        }
      >
        <CustomButton rippleColor='dark'>
          <i className="fas fa-user"></i>
        </CustomButton>
      </Tooltip>
    </StyledHeader>
  )
};

export default Header;
