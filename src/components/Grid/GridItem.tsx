import React from 'react';
import styled from 'styled-components';

const StyledGridItem = styled.div`
  margin: 10px;
  align-self: flex-start;
  flex: 1;
`;

const GridItem = (props: Props) => {

  return (
    <StyledGridItem>
      {props.children}
    </StyledGridItem>
  );
};

interface Props {
  children: React.ReactNode;
}

export default GridItem;