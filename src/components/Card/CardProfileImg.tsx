import React from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  margin-top: -40px;
  margin-bottom: 40px;
  text-align: -webkit-center;
`;

const SImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  box-shadow: 1px 1px 40px 0 rgba(0, 0, 0, 0.5);
`;

const CardProfileImg = (props: Props) => {
  const { src } = props;

  return (
    <SContainer>
      <SImg src={src} />
    </SContainer>
  );
};

interface Props {
  src: string;
}

export default CardProfileImg;
