import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<Props>`
  background-color: ${props => props.transparent ? 'transparent' : '#f2f2f2'};
  box-shadow: ${props => props.transparent ? '' : '0 0 5px 0 rgba(0, 0, 0, 0.2)'};
  border-radius: 5px;
  padding: 15px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;

const Card = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <StyledCard {...rest}>
      {children}
    </StyledCard>
  );
};

interface Props {
  children: React.ReactNode;
  transparent?: boolean;
}

export default Card;