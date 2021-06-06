import React from 'react';
import styled from 'styled-components';
// Hooks
import { useComponentDidUpdate } from '../../hooks';

interface ILabel {
  activate?: boolean;
  deactivate?: boolean;
  target: 'input' | 'textarea';
}
const SLabel = styled.label<ILabel>`
  font-size: 13px;
  color: #848484;
  position: absolute;
  cursor: text;
`;

const SInputLabel = styled(SLabel)`
  margin-top: 9px;
  margin-left: 10px;
  
  animation: ${props => props.deactivate ?
    '0.1s ease forwards deactivateInput' :
    (props.activate ?
      '0.1s ease forwards activateInput' : ''
    )
  };
  @keyframes activateInput {
    100% { font-size: 11px; margin-top: -7px; }
  }  
  @keyframes deactivateInput {
    0% { font-size: 11px; margin-top: -7px; }
    100% { font-size: 13px; margin-top: 9px; }
  }
`;

const STextareaLabel = styled(SLabel)`
  margin-top: 0px;
  margin-left: 3px;

  animation: ${props => props.deactivate ?
    '0.1s ease forwards deactivateTextarea' :
    (props.activate ?
      '0.1s ease forwards activateTextarea' : ''
    )
  };
  @keyframes activateTextarea {
    100% { font-size: 11px; margin-top: -20px; }
  }
  @keyframes deactivateTextarea {
    0% { font-size: 11px; margin-top: -20px; }
    100% { font-size: 13px; margin-top: 0px; }
  }
`;

const InputLabel = (props: Props) => {
  const { children, type, target, htmlFor, isFocused, value } = props;

  const [showLabel, setShowLabel] = React.useState(true);
  const [activate, setActivate] = React.useState(false);
  const [deactivate, setDeactivate] = React.useState(false);

  const componentDidUpdate = useComponentDidUpdate();

  React.useEffect(() => {
    if (componentDidUpdate) {
      if (type === 'label') {
        if (value !== '' || isFocused) {
          setDeactivate(false);
          setActivate(true);
        } else if (!isFocused) {
          setDeactivate(true);
        } 
      } else if (type === 'placeholder') {
        if (value !== '') {
          setShowLabel(false);
        } else {
          setShowLabel(true);
        }
      }
    }
  }, [value, type, isFocused, componentDidUpdate]);

  return (
    <>
    {showLabel && (
      target === 'textarea' ?
        <STextareaLabel
          htmlFor={htmlFor}
          target={'textarea'}
          activate={activate}
          deactivate={deactivate}
        >
          {children}
        </STextareaLabel>
      : (target === 'input') &&
        <SInputLabel
          htmlFor={htmlFor}
          target={'input'}
          activate={activate}
          deactivate={deactivate}
        >
          {children}
        </SInputLabel>
    )}
    </>
  );

};

interface Props {
  children: React.ReactNode;
  type: 'label' | 'placeholder';
  target: 'input' | 'textarea';
  htmlFor: string;
  isFocused: boolean;
  value: string;
}

export default InputLabel;
