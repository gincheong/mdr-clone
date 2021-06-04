import React from 'react';
// Components
import { CustomText, Task } from '../components';
import { Card, CardIcon, CardHeader, CardFooter, CardTitle } from '../components';
import { Table, TableRow } from '../components';
import { GridContainer, GridItem } from '../components';
// DummyData
import DummyTable from '../data/dummyTable';
import DummyTasks from '../data/dummyTasks';

const Dashboard = () => {

  return (
    <>
    <GridContainer>
      <GridItem size={3}>
        <Card>
          <CardHeader icon>
            <CardIcon>
              <i className="far fa-clone"></i>
            </CardIcon>
            <CustomText gray>Used Space</CustomText>
            <CustomText large>
              49/50 <small>GB</small>
            </CustomText>
          </CardHeader>
          <CardFooter>Get more space</CardFooter>
        </Card>
      </GridItem>
      <GridItem size={3}>
        <Card>
          <CardHeader icon>
            <CardIcon>
              <i className="fas fa-home"></i>
            </CardIcon>
            <CustomText gray>Revenue</CustomText>
            <CustomText large>$34,245</CustomText>
          </CardHeader>
          <CardFooter>Last 24 Hours</CardFooter>
        </Card>
      </GridItem>
      <GridItem size={3}>
        <Card>
          <CardHeader icon>
            <CardIcon>
              <i className="fas fa-info-circle"></i>
            </CardIcon>
            <CustomText gray>Fixed Issues</CustomText>
            <CustomText large>75</CustomText>
          </CardHeader>
          <CardFooter>Tracked from Github</CardFooter>
        </Card>
      </GridItem>
      <GridItem size={3}>
        <Card>
          <CardHeader icon>
            <CardIcon>
              <i className="fas fa-child"></i>
            </CardIcon>
            <CustomText gray>Followers</CustomText>
            <CustomText large>+245</CustomText>
          </CardHeader>
          <CardFooter>Just Updated</CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem size={4}>
        <Card>
          <CardTitle>
            1번 차트
          </CardTitle>
          <CustomText large>
            <small>Daily Sales</small>
          </CustomText>
          <CustomText gray>55% Increase in today sales</CustomText>
          <CardFooter>updated 4minutes ago</CardFooter>
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          <CardTitle>
            2번 차트
          </CardTitle>
          <CustomText large>
            <small>Email Subscriptions</small>  
          </CustomText>
          <CustomText gray>Last Campaign Performance</CustomText>
          <CardFooter>campaign sent 2 days ago</CardFooter>
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          <CardTitle>
            3번 차트
          </CardTitle>
          <CustomText large>
            <small>Completed Tasks</small>
          </CustomText>
          <CustomText gray>Last Campaign Performance</CustomText>
          <CardFooter>campaign sent 2 days ago</CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem size={6}>
        <Card>
        <Task tasks={DummyTasks} />
        </Card>
      </GridItem>
      <GridItem size={6}>
        <Card>
          <CardTitle>
            <CustomText large>Employees Stats</CustomText>
            <CustomText gray>New employees on 15th September, 2016</CustomText>
          </CardTitle>
          <Table head={['ID', 'Name', 'Salary', 'Country']}>
            {DummyTable.map(each => <TableRow key={each.join()} data={each} />)}
          </Table>
        </Card>
      </GridItem>
    </GridContainer>
    </>
  );
};

export default Dashboard;