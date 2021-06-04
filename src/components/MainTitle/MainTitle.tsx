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
          color: '#f2f2f2',
          padding: '20px',
          margin: '15px',
          borderRadius: '10px',

          textAlign: 'center',
          fontSize: '30px'
        }}
      >
        <i className="fas fa-copy"></i> mdr-clone
      </CustomButton>
    </StyledMainTitle>
  );  
};

export default MainTitle;