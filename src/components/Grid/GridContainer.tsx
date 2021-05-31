import React from 'react';
import styled from 'styled-components';

const StyledGridContainer = styled.div`
  display: flex;
  padding: 15px;
`;

const GridContainer = (props: Props) => {
  return (
    <StyledGridContainer>
      {props.children}
    </StyledGridContainer>
  );
};

interface Props {
  children: React.ReactNode;
}

export default GridContainer; 