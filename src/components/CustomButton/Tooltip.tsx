import React from 'react';
import styled from 'styled-components';
// Components
import Badge from './Badge';

const StyledContainer = styled.div`
  position: relative;
`;

interface ITooltipContent {
  showTooltip: boolean;
}
const TooltipContent = styled.div<ITooltipContent>`
  position: absolute;
  
  padding: 10px;
  border-radius: 15px;
  background-color: #f2f2f2;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  animation: 200ms ease forwards expand-effect;
  @keyframes expand-effect {
    0% { transform: scale(0.1); opacity: 0; }
    80% { transform: scale(1); }
    100% { opacity: 1; }
  }
  
`;

const Tooltip = (props: Props) => {
  const { children, tooltipChildren, badge, direction } = props;

  const [showTooltip, setShowTooltip] = React.useState(false);

  const tooltipRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const closeTooltip = () => {
      if (showTooltip) {
        setShowTooltip(false);
        console.log('바깥클릭으로툴팁닫기');
      }
    };
    if (showTooltip) {
      window.addEventListener('click', closeTooltip);
    }
    return () => {
      window.removeEventListener('click', closeTooltip);      
    };
  });

  const onClick = (event: React.MouseEvent) => {
    setShowTooltip(prevState => !prevState);
  };

  return (
    <StyledContainer onClick={onClick}>
      {children}
      {badge && <Badge notiCount={badge} />}
      {showTooltip && 
        <TooltipContent 
          showTooltip={showTooltip}
          ref={tooltipRef}
        >
          {tooltipChildren}
        </TooltipContent>
      }
    </StyledContainer>
  );
};

interface Props {
  children?: React.ReactNode;
  tooltipChildren: React.ReactNode;
  badge?: number;
  direction: 'left' | 'right' | 'top' | 'bottom';
}

export default Tooltip;