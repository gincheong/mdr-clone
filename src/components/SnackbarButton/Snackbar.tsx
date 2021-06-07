import React from 'react';
import styled, { CSSObject } from 'styled-components';
// Components
import { CustomButton, CustomText } from '../../components';

interface ISnackbar extends Props {
  opacity: string;
}
const SSnackbar = styled.div<Partial<ISnackbar>>`

  opacity: ${props => props.opacity};
  transition: opacity 100ms linear;

  max-width: 550px;
  align-items: center;
  position: absolute;
  padding: 20px;
  top: 20px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);

  display: flex;
  background-color: #cee5d5;
  z-index: 100;
`;

const SNotiIcon = styled.i`
  font-size: 30px;
  margin-right: 20px;
`;

const SCloseIcon = styled.i`
  cursor: pointer;
`;

const Snackbar = (props: Props) => {
  const { children, position, initOpacityState } = props;
  const [initOpacity, setInitOpacity] = initOpacityState;
  
  const [opacity, setOpacity] = React.useState('0');
  const [posStyle, setPosStyle] = React.useState<CSSObject>({});

  React.useEffect(() => {
    switch (position) {
      case 'top-left':
        setPosStyle({
          left: '1%',
          right: 'auto',
        });
        break;
      case 'top-center':
        setPosStyle({
          left: '50%',
          right: 'auto',
          transform: 'translateX(-50%)',
        });
        break;
      case 'top-right':
        setPosStyle({
          left: 'auto',
          right: '1%',
        });
        break;
      case 'bottom-left':
        setPosStyle({
          left: '1%',
          right: 'auto',
          bottom: '1%',
          top: 'auto',
        });
        break;
      case 'bottom-center':
        setPosStyle({
          left: '50%',
          right: 'auto',
          transform: 'translateX(-50%)',
          bottom: '1%',
          top: 'auto',
        });
        break;
      case 'bottom-right':
        setPosStyle({
          left: 'auto',
          right: '1%',
          bottom: '1%',
          top: 'auto',
        });
        break;
      default:
        break;
    }
  }, [position]);

  React.useEffect(() => {
    setOpacity(initOpacity);
  }, [setOpacity, initOpacity]);

  const onClick = () => {
    setInitOpacity('0');
    setOpacity('0');
  };


  return (
    <SSnackbar position={position} opacity={opacity} style={posStyle}>
      <SNotiIcon className="fas fa-exclamation-circle" />
      <CustomText>
        {children}
      </CustomText>
      <CustomButton
        rippleColor='light'
        onClick={onClick}
        style={{
          borderRadius: '50%',
        }}
      >
        <SCloseIcon className="fas fa-times" />
      </CustomButton>
    </SSnackbar>
  );
};

interface Props {
  children: React.ReactNode;
  position: 'top-left' | 'top-center' | 'top-right' |
            'bottom-left' | 'bottom-center' | 'bottom-right';
  initOpacityState: [string, Function];
}

export default Snackbar;