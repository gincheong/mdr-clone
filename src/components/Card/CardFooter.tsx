import React from 'react';
import styled from 'styled-components';

const StyledCardFooter = styled.footer`
  margin-top: 20px;
  font-size: 14px;
`;

const CardFooter = (props: Props) => {

  return (
    <StyledCardFooter>
      <hr color='#ccc' />
      {props.children}
    </StyledCardFooter>
  );
};

interface Props {
  children: React.ReactNode;
}

export default CardFooter;