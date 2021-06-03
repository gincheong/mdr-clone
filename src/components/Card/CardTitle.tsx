import React from 'react';
import styled from 'styled-components';

const SCardTitle = styled.div`
  background: linear-gradient(to right, #a7e0e1, #b7d3e9);
  
  border-radius: 5px;
  padding: 15px 30px;
  margin-top: -40px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
`;

const CardTitle = (props: Props) => {
  const { children } = props;

  return (
    <SCardTitle>
      {children}
    </SCardTitle>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default CardTitle;