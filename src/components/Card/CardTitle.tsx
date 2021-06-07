import React from 'react';
import styled from 'styled-components';

const SCardTitle = styled.div<Props>`
  background: linear-gradient(to right, #a7e0e1, #b7d3e9);

  margin-left: ${props => props.transparent ? '-15px' : ''};
  margin-right: ${props => props.transparent ? '-15px' : ''};

  border-radius: 5px;
  padding: 15px 30px;
  margin-top: -40px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
`;

const CardTitle = (props: Props) => {
  const { children, transparent } = props;

  return (
    <SCardTitle transparent={transparent}>
      {children}
    </SCardTitle>
  );
};

interface Props {
  children?: React.ReactNode;
  transparent?: boolean;
}

export default CardTitle;