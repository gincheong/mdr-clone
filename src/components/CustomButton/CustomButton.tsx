import React from 'react';
import styled from 'styled-components';
// Child Components
import Ripple from './Ripple';

interface IStyledCustomButton {
  isSelected?: boolean;
};
const StyledCustomButton = styled.div<IStyledCustomButton>`
  color: #f2f2f2;
  background-color: ${props => props.isSelected ? '#db706c' : '#333'}; // var
  transition: background-color 0.5s linear;

  padding: 20px;
  margin: 15px;
  border-radius: 10px;

  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  cursor: pointer;
`;

const CustomButton = (props: Props) => {
  const [rippleKey, setRippleKey] = React.useState(0);
  const [ripples, setRipples] = React.useState<
    {[key: string]: { x: number, y: number }}
  >({});

  const customButtonRef = React.useRef<HTMLDivElement>(null);

  const onClick = (event: React.MouseEvent) => {
    const $target = customButtonRef.current as HTMLDivElement;
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
      isSelected={props.isSelected}
    >
      {props.children}
      {Object.keys(ripples).map(key => {
        return (
          <Ripple
            key={key}
            onAnimationEnd={(event) => onAnimationEnd(event, key)} 
            coords={ripples[key]}
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
  // selectedColor?: string; // * 나중에 선택 색상 바꿀거면 추가하기
  // defaultColor?: string;
}

export default CustomButton;
