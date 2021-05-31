import React from 'react';
import styled from 'styled-components';

const StyledCardHeader = styled.header<Props>`
  text-align: ${props => props.icon ? 'right' : ''};
`;

const CardHeader = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <StyledCardHeader {...rest}>
      {children}
    </StyledCardHeader>
  );
};

interface Props {
  children: React.ReactNode;
  icon?: boolean;
}

export default CardHeader;