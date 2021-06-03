import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
// Components
import { Footer, Header, Sidebar } from '../components';
// DummyData
import DummySidebar from '../data/dummySidebar';

const SContainer = styled.div`
  background-color: #ddd;

  width: calc(100% - 250px); // sidebar 크기 제외
  float: right;
`;

const SContent = styled.div`
  min-height: calc(100vh - 160px);
`;

const Main = () => {
  return (
    <>
    <Sidebar navLinks={DummySidebar} />
    <SContainer>
      <Header />
      <SContent>
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
      </SContent>
      <Footer />
    </SContainer>
    </>
  )
};

export default Main;