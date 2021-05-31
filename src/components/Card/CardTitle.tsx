import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.div`
  color: #555;
`;

const CardTitle = (props: Props) => {
  const { children } = props;

  return (
    <StyledCardTitle>
      {children}
    </StyledCardTitle>
  );
};

interface Props {
  children: React.ReactNode;
}

export default CardTitle;