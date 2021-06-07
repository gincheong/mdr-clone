import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  text-align: -webkit-center;
`;


const CardProfileDescription = (props: Props) => {
  const { children } = props;

  return (
    <SContainer>
      {children}
    </SContainer>
  );
};

interface Props {
  children: React.ReactNode;
}

export default CardProfileDescription;
