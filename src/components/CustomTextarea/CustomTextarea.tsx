import React from 'react';
import styled from 'styled-components';
// Components
import { InputLabel } from '../../components';

interface IContainer {
  isFocused: boolean;
}
const SContainer = styled.div<IContainer>`
  position: relative;
  
  &:before {
    border-bottom: 1px solid #aaa;

    left: 0;
    top: 0;
    bottom: 4px;
    right: 0;
    position: absolute;
    content: '';

    pointer-events: none;
  }

  &:after {
    border-bottom: 2px solid #d9598c;

    left: 0;
    top: 0;
    bottom: 4px;
    right: 0;
    position: absolute;
    content: '';
    
    transform: ${props => props.isFocused ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 200ms ease-out;
  }
`;

const STextarea = styled.textarea`
  resize: none;
  border: none;
  background-color: inherit;
  width: 100%;
  
  &:focus {
    outline: none;
  }
`;

const CustomTextarea = (props: Props) => {
  const { labelType, labelString } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <SContainer isFocused={isFocused}>
      <InputLabel
        type={labelType}
        htmlFor={labelString}
        target='textarea'
        value={value}
        isFocused={isFocused}
      >
        {labelString}
      </InputLabel>
      <STextarea
        rows={5}
        id={labelString}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </SContainer>
  ); 
};

interface Props {
  labelType: 'label' | 'placeholder';
  labelString: string;
}

export default CustomTextarea;