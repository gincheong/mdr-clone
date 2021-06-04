import React from 'react';
import styled from 'styled-components';

const StyledGridItem = styled.div<Props>`
  margin: 10px;
  align-self: flex-start;
  flex: 1;

  max-width: ${props => {
    return `${Math.min(100, 100 / 12 * props.size)}%`;
  }};
`;

const GridItem = (props: Props) => {
  const { children, size } = props;

  return (
    <StyledGridItem size={size}>
      {children}
    </StyledGridItem>
  );
};

interface Props {
  children: React.ReactNode;
  size: number; // 1 ~ 12
}

export default GridItem;