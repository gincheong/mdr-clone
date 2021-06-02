import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { CustomButton } from '../../components';
// Models
import { ISidebarNav } from '../../models';

const SidebarNav = (props: Props) => {
  return (
    <NavLink to={`${props.layout}/${props.path}`}
      style={{ textDecoration: 'none' }}
    >
      <CustomButton
        rippleColor='light'
        isSelected={props.selected}>
        {props.title}
      </CustomButton>
    </NavLink>
  );
};

interface Props extends ISidebarNav {
  selected: boolean;
}

export default SidebarNav;