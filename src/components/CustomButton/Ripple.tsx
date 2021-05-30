import React from 'react';
import styled from 'styled-components';

const StyledRipple = styled.div`
  background: rgba(255, 255, 255, 0.5);

  width: 10px;
  height: 10px;
  border-radius: 9999px;
  position: absolute;

  animation: 0.9s ease forwards ripples-effect;
  @keyframes ripples-effect {
    0% { transform: scale(1); opacity: 1; }
    80% { transform: scale(50); }
    100% { opacity: 0; }
  }
`;

const Ripple = (props: Props) => {
  return (
    <StyledRipple
      onAnimationEnd={props.onAnimationEnd}
      style={{
        left: props.coords.x,
        top: props.coords.y
      }}
    />
  );
};

interface Props {
  onAnimationEnd: React.AnimationEventHandler;
  coords: {
    x: number,
    y: number
  };
}

export default Ripple;
