import React from 'react';
import styled from 'styled-components';

interface IContainer {
  isFocused: boolean;
}
const SContainer = styled.div<IContainer>`
  position: relative;
  display: flex;

  &:after {
    border-bottom: 2px solid #d9598c;

    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    content: '';
    
    transform: ${props => props.isFocused ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 200ms ease-out;
  } 
`;

const SInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid #aaa;
  background-color: inherit;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const CustomInput = (props: Props) => {
  const { type, placeholder, disabled } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <SContainer isFocused={isFocused}>
      <SInput
        type={type}
        placeholder={placeholder ?? ''}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SContainer>
  );
};

interface Props {
  type: string;
  placeholder?: string;
  disabled?: boolean
}

export default CustomInput;