import React from 'react';
import styled, { CSSObject } from 'styled-components';
// Components
import Ripple from './Ripple';

const StyledCustomButton = styled.div<Partial<Props>>`
  color: #000;
  background-color: ${props => props.isSelected ?
    ( props.selectedColor ?? '#db706c') :
    props.defaultColor
  };
  transition: background-color 0.5s linear;

  padding: 10px 15px;
  /* margin: 15px; */
  border-radius: 10px;

  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  cursor: pointer;
`;

const CustomButton = (props: Props) => {
  const { children, isSelected, selectedColor, defaultColor, style, rippleColor } = props;

  const [rippleKey, setRippleKey] = React.useState(0);
  const [ripples, setRipples] = React.useState<{[key: string]: { x: number, y: number }}>({});

  const customButtonRef = React.useRef<HTMLDivElement>(null);

  const onClick = (event: React.MouseEvent) => {
    const $target = customButtonRef.current as HTMLDivElement;
    
    event.target = $target;
    // ripple에서 발생한 이벤트를 button에서 발생한 것으로 변경
    if (props.onClick) {props.onClick(event); }

    const rect = $target.getBoundingClientRect();

    setRipples(prevState => {
      return { ...prevState, 
        [rippleKey]: {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        }
      }
    });
    setRippleKey(prevState => prevState + 1);
  };

  const onAnimationEnd = (event: React.AnimationEvent, key: string) => {
    if (event.animationName === 'ripples-effect') {
      const newRipples = Object.assign({}, ripples);
      delete newRipples[key];
      setRipples(newRipples);
    }
  };

  return (
    <StyledCustomButton
      onClick={onClick}
      ref={customButtonRef}
      isSelected={isSelected}
      defaultColor={defaultColor}
      selectedColor={selectedColor}
      style={style}
    >
      {children}
      {Object.keys(ripples).map(key => {
        return (
          <Ripple
            key={key}
            onAnimationEnd={(event) => onAnimationEnd(event, key)} 
            coords={ripples[key]}
            rippleColor={rippleColor}
          />
        );
      })
      }
    </StyledCustomButton>
  );
};

interface Props {
  children?: React.ReactNode;
  isSelected?: boolean;
  defaultColor?: string;
  style?: CSSObject;
  rippleColor: 'light' | 'dark';
  selectedColor?: string;
  onClick?: React.MouseEventHandler;
}

export default CustomButton;
