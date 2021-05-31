import React from 'react';
import styled from 'styled-components';

const StyledCardDescription = styled.div`
  font-size: 30px;
`;

const CardDescription = (props: Props) => {

  const { children } = props;

  return (
    <StyledCardDescription>
      {children}
    </StyledCardDescription>
  );
};

interface Props {
  children: React.ReactNode;
}

export default CardDescription;