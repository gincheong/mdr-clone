import React from 'react';
import styled, { CSSObject } from 'styled-components';
// Components
import Snackbar from './Snackbar';
import { CustomButton } from '../../components';

const SContainer = styled.div`
  margin: 10px;
`;

const SnackbarButton = (props: Props) => {
  const { children, buttonText, position, style } = props;

  const [initOpacity, setInitOpacity] = React.useState('0');
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const onClick = () => {
    setShowSnackbar(true);
    setInitOpacity('1');
  };

  const onTransitionEnd = (event: React.TransitionEvent) => {
    if (initOpacity === '0') {
      setShowSnackbar(false);
    }
  };

  return (
    <SContainer onTransitionEnd={onTransitionEnd} style={style}>
      <CustomButton
        rippleColor='light'
        style={{
          textAlign: 'center',
          backgroundColor: '#9d36b3',
          color: '#f2f2f2',
          padding: '10px 60px',
        }}
        onClick={onClick}
      >
        {buttonText}
      </CustomButton>
      {showSnackbar &&
        <Snackbar
          position={position}
          initOpacityState={[initOpacity, setInitOpacity]}
        >
          {children}
        </Snackbar>
      }
    </SContainer>
  );
};

interface Props {
  children: React.ReactNode;
  position: 'top-left' | 'top-center' | 'top-right' |
            'bottom-left' | 'bottom-center' | 'bottom-right';
  buttonText: string;
  style?: CSSObject;
}

export default SnackbarButton;