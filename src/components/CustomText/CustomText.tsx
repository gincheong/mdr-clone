import React from 'react';
import styled from 'styled-components';

const SCustomText = styled.div<Props>`
  color: ${props => {
    if (props.light) {
      return '#f2f2f2';
    } else if (props.gray) {
      return '#555';
    } else {
      return 'inherit';
    }
  }};

  font-size: ${props => {
    if (props.large) {
      return '150%';
    } else if (props.small) {
      return '75%';
    } else if (props.medium) {
      return '85%';
    } else {
      return '100%';
    }
  }};

  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`;

const CustomText = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <SCustomText {...rest}>
      {children}
    </SCustomText>
  );
};

interface Props {
  children: React.ReactNode;
  light?: boolean;
  gray?: boolean;
  large?: boolean;
  small?: boolean;
  medium?: boolean;
  bold?: boolean;
}

export default CustomText;