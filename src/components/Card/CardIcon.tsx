import React from 'react';
import styled from 'styled-components';

const StyledCardIcon = styled.div`
  width: 100px;
  height: 100px;
  float: left;
  margin-top: -40px;
  margin-left: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CardIcon = (props: Props) => {

  return (
    <StyledCardIcon>
      <StyledImg src={props.src} />
    </StyledCardIcon>
  );
};

interface Props {
  src: string;
}

export default CardIcon;