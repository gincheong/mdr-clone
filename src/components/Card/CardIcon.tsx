import React from 'react';
import styled from 'styled-components';

const StyledCardIcon = styled.div`
  background: linear-gradient(to right, #ff69a5, #d9598c);
  color: #f2f2f2;

  text-align: center;

  padding: 30px;
  float: left;
  margin-top: -40px;
  margin-left: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);

  & > i {
    font-size: 35px;
    width: 40px;
    height: 40px;
  }
`;

const CardIcon = (props: Props) => {
  const { children } = props;

  return (
    <StyledCardIcon>
      {children}
    </StyledCardIcon>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default CardIcon;