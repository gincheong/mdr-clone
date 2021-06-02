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
      <Tooltip
        direction="bottom"
        tooltipChildren={
          <CustomButton
            rippleColor='dark'
            defaultColor='inherit'
            style={{ color: '#000' }}
          >
            asd
          </CustomButton>
        }
      >
        <CustomButton
          rippleColor='dark'
          style={{
            padding: '10px',
            margin: 0,
            color: '#000',
            backgroundColor: 'inherit',
          }}>
          A
        </CustomButton>
      </Tooltip>
      <Tooltip
        direction="bottom"
        tooltipChildren={
          <CustomButton
            rippleColor='dark'
            defaultColor='inherit'
            style={{ color: '#000' }}
          >
            asd
          </CustomButton>
        }
      >
        <CustomButton
          rippleColor='dark'
          style={{
            padding: '10px',
            margin: 0,
            color: '#000',
            backgroundColor: 'inherit',
          }}>
          B
        </CustomButton>
      </Tooltip>
    </StyledHeader>
  )
};

export default Header;
