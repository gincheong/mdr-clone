import React from 'react';
import styled from 'styled-components';
// Components
import { InputLabel } from '../../components';

interface IContainer {
  isFocused: boolean;
}
const SContainer = styled.div<IContainer>`
  position: relative;
  display: flex;

  &:before {
    border-bottom: 1px solid #aaa;

    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    content: '';

    pointer-events: none;
  }

  &:after {
    border-bottom: 2px solid #d9598c;

    left: 0;
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
  background-color: inherit;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const CustomInput = (props: Props) => {
  const { type, labelType, labelString, disabled } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <SContainer isFocused={isFocused}>
      <InputLabel
        type={labelType}
        htmlFor={labelString}
        target='input'
        value={value}
        isFocused={isFocused}
      >
        {labelString}
      </InputLabel> 
      <SInput
        id={labelString}
        type={type}
        disabled={disabled}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SContainer>
  );
};

interface Props {
  type: string;
  labelType: 'label' | 'placeholder';
  labelString: string;
  disabled?: boolean
}

export default CustomInput;