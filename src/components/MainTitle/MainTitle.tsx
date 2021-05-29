import styled from 'styled-components';

const StyledMainTitle = styled.div`
  color: #f2f2f2;
  background-color: #567ace;

  padding: 20px;
  margin: 15px;
  border-radius: 10px;

  text-align: center;
  font-size: 30px;
  
`;

const MainTitle = () => {

  return (
    <StyledMainTitle>
      Title or Logo
    </StyledMainTitle>
  );  
};

export default MainTitle;