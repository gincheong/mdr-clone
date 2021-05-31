import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
// Components
import { Header, Sidebar } from '../components';
// DummyData
import DummySidebar from '../data/dummySidebar';

const StyledMainContent = styled.div`
  background-color: #ddd;

  width: calc(100% - 250px); // sidebar 크기 제외
  float: right;
  min-height: 100vh;
`;

const Main = () => {
  return (
    <>
    <Sidebar navLinks={DummySidebar} />
    <StyledMainContent>
      <Header />
      <Switch>
        {DummySidebar.map((each, key) => {
          if (each.layout === '/main') {
            return (
              <Route
                path={`${each.layout}/${each.path}`} 
                component={each.component} 
                key={key}
              />
            );
          }
          return null;
        })
        }
      </Switch>
    </StyledMainContent>
    </>
  )
};

export default Main;