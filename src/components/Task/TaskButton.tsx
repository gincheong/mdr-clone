import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton } from '../../components';

const STaskButton = styled.div`
  position: relative;
  margin-left: 5px;
`;

interface ITooltip {
  fadeOut: boolean;
}
const STooltip = styled.div<ITooltip>`
  position: absolute;
  left: -75px;
  margin-top: -45px;
  width: 150px;

  color: #f2f2f2;
  background-color: #000;

  padding: 10px;
  text-align: center;
  border-radius: 5px;

  animation: 0.2s ease forwards ${props => props.fadeOut ? 'fade-out' : 'fade-in'};
  @keyframes fade-in {
    0% { opacity: 0; }
    70% { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 0.6; }
  }
  @keyframes fade-out {
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: scale(0.5); opacity: 0; }
  }
`;

const TaskButton = (props: Props) => {
  const { children, hoverContent } = props;
  
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [fadeOut, setFadeOut] = React.useState(false);
  const [delayTimeout, setDelayTimeout] = React.useState<NodeJS.Timeout>();

  const onMouseEnter = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
      setDelayTimeout(undefined);
    }

    const timeoutId = setTimeout(() => setShowTooltip(true), 200);
    setDelayTimeout(timeoutId);
    setFadeOut(false);
  };

  const onMouseLeave = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
      setDelayTimeout(undefined);
    }

    const timeoutId = setTimeout(() => setShowTooltip(false), 200);
    setDelayTimeout(timeoutId);
    setFadeOut(true);
  };

  return (
    <STaskButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {showTooltip && <STooltip fadeOut={fadeOut}>{hoverContent}</STooltip>}
      <CustomButton
        rippleColor='dark'
        style={{ padding: '5px' }}
      >
        {children}
      </CustomButton>
    </STaskButton>
  );
};

interface Props {
  children: React.ReactNode;
  hoverContent: string;
}

export default TaskButton;