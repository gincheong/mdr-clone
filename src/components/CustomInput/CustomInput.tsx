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

interface ILabel {
  animation?: boolean;
  restoreAnimation?: boolean;
}
const SLabel = styled.label<ILabel>`
  position: absolute;
  margin-top: 9px;
  margin-left: 10px;
  
  font-size: 13px;
  color: #848484;

  animation: ${props => props.restoreAnimation ?
    '0.1s ease forwards restoreLabel' :
    (props.animation ?
      '0.1s ease forwards moveLabel' : ''
    )
  };

  @keyframes moveLabel {
    100% { font-size: 11px; margin-top: -7px; }
  }
  @keyframes restoreLabel {
    0% { font-size: 11px; margin-top: -7px; }
    100% { font-size: 13px; margin-top: 9px; }
  }
`;

const CustomInput = (props: Props) => {
  const { type, placeholder, disabled, label } = props;

  const [isFocused, setIsFocused] = React.useState(false);
  const [value, setValue] = React.useState('');

  const [animation, setAnimation] = React.useState(false);
  const [showLabel, setShowLabel] = React.useState(true);
  const [restoreAnimation, setRestoreAnimation] = React.useState(false);

  React.useEffect(() => {
    if (label) {
      if (value !== '' || isFocused) {
        setAnimation(true);
      } else if (!isFocused) {
        setRestoreAnimation(true);
        setTimeout(() => {
          setAnimation(false);
          setRestoreAnimation(false);
        }, 100);
      }
    } else {
      if (value !== '') {
        setShowLabel(false);
      } else {
        setShowLabel(true);
      }
    }
  }, [value, label, isFocused]);

  return (
    <SContainer isFocused={isFocused}>
      {showLabel &&
        <SLabel htmlFor={placeholder} animation={animation} restoreAnimation={restoreAnimation}>
          {placeholder}
        </SLabel>
      }
      <SInput
        id={placeholder}
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
  placeholder?: string;
  disabled?: boolean
  label?: boolean;
}

export default CustomInput;