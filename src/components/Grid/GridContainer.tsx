import React from 'react';
import styled, { CSSObject } from 'styled-components';

const StyledGridContainer = styled.div`
  display: flex;
  padding: 15px;
`;

const GridContainer = (props: Props) => {
  const { children, style } = props;

  return (
    <StyledGridContainer style={style}>
      {children}
    </StyledGridContainer>
  );
};

interface Props {
  children: React.ReactNode;
  style?: CSSObject;
}

export default GridContainer; 