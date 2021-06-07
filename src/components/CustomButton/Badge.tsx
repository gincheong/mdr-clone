import React from 'react';
import styled from 'styled-components';

const SBadge = styled.div`
  background-color: red;
  color: #f2f2f2;

  position: absolute;
  right: 10%;
  top: 10%;
  text-align: center;
  border-radius: 50%;

  width: 15px;
  height: 15px;
  font-size: 9px;
`;

const Badge = (props: Props) => {
  const { notiCount } = props;

  return (
    <SBadge>
      {notiCount > 9 ? '9+' : notiCount}
    </SBadge>
  );
};

interface Props {
  notiCount: number;
}

export default Badge;