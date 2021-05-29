import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Models
import { ISidebarNav } from '../../models';

interface Props extends ISidebarNav {
  selected: boolean;
}

const StyledSidebarNav = styled.div<Pick<Props, 'selected'>>`
  color: #f2f2f2;
  background-color: ${props => props.selected ? '#db706c' : ''};
  transition: background-color 0.5s linear;

  padding: 20px;
  margin: 15px;
  border-radius: 10px;

  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: -2;
`;

const Ripple = styled.div`
  background: rgba(255, 255, 255, 0.5);

  width: 10px;
  height: 10px; // 흠
  border-radius: 9999px;
  position: absolute;
  
  animation: 0.9s ease ripple-effect;
  animation-fill-mode: forwards;
  z-index: -1;

  // 동그란 div태그를 크기를 키우면서 애니메이션을 보여줌
  @keyframes ripple-effect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    80% {
      transform: scale(50);
    }
    100% {
      opacity: 0;
    }
  }
`;

const SidebarNav = (props: Props) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 }); // 버튼에서의 클릭 좌표
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      // 버튼이 클릭되었을 때 
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 900);
      // Ripple의 animation 0.9s와 일치시키기
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  const onClick = (event: React.MouseEvent) => {
    const $target = event.target as HTMLElement;
    const rect = $target.getBoundingClientRect();
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top});
  };

  return (
    <NavLink to={`${props.layout}/${props.path}`}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
      >
      <StyledSidebarNav selected={props.selected}>
        {isRippling &&
          <Ripple style={{ left: coords.x, top: coords.y }}/>
        }
        {props.title}
      </StyledSidebarNav>
    </NavLink>
  );
};

export default SidebarNav;

