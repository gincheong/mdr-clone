import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton } from '../../components';

const SCheckbox = styled.input`
  cursor: pointer;
`;

const Checkbox = (props: Props) => {
  const [checked, setChecked] = React.useState(false);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <CustomButton
      rippleColor='dark'
      style={{
        margin: '0',
        padding: '10px',
        borderRadius: '9999px'
      }}
      isSelected={checked}
      selectedColor='rgba(187, 176, 220, 0.3)' // bbb0dc
      onClick={onChange}
    >
      <SCheckbox
        type='checkbox'
        onChange={onChange}
        checked={checked}
      />
    </CustomButton>
  );
};

interface Props {
}

export default Checkbox;