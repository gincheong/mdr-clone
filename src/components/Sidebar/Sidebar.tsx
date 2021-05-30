import React from 'react';
import styled from 'styled-components';
// Components
import SidebarNav from './SidebarNav';
import { MainTitle } from '../'
// Models
import { ISidebarNav } from '../../models';
import { useLocation } from 'react-router';

const StyledSidebar = styled.div`
  background-color: #444; // var
  color: #f2f2f2; // var
  
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;

  box-shadow: 1px 0px 3px black;
`;

const Sidebar = (props: Props) => {
  const location = useLocation();

  const isCurrentRoute = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <StyledSidebar>
      <MainTitle />
      {props.navLinks.map((each, key) => {
        return (
          <SidebarNav
            key={key}
            title={each.title}
            path={each.path}
            layout={each.layout}
            selected={isCurrentRoute(`${each.layout}/${each.path}`)}
          />
          // ! index를 key로 사용?
        );
      })
      }
    </StyledSidebar>
  )
};

interface Props {
  navLinks: ISidebarNav[];
}

export default Sidebar;