import styled from 'styled-components';
// Components
import { CustomButton } from '../../components';

const StyledMainTitle = styled.div``;

const MainTitle = () => {
  return (
    <StyledMainTitle>
      <CustomButton
        defaultColor="#567ace"
        rippleColor='light'
        style={{
          padding: '20px',
          margin: '15px',
          borderRadius: '10px',

          textAlign: 'center',
          fontSize: '30px'
        }}
      >
        Title or Logo
      </CustomButton>
    </StyledMainTitle>
  );  
};

export default MainTitle;