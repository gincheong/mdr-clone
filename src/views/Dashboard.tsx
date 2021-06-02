import React from 'react';
// Components
import { CustomText } from '../components';
import { Card, CardIcon, CardHeader, CardFooter, CardTitle } from '../components';
import { Table, TableRow } from '../components';
import { GridContainer, GridItem } from '../components';
// DummyData
import DummyTable from '../data/dummyTable';

const Dashboard = () => {

  return (
    <>
    <GridContainer>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/100/100"} />
            <CustomText gray>Used Space</CustomText>
            <CustomText large>
              49/50 <small>GB</small>
            </CustomText>
          </CardHeader>
          <CardFooter>Get more space</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/101/101"} />
            <CustomText gray>Revenue</CustomText>
            <CustomText large>$34,245</CustomText>
          </CardHeader>
          <CardFooter>Last 24 Hours</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/102/102"} />
            <CustomText gray>Fixed Issues</CustomText>
            <CustomText large>75</CustomText>
          </CardHeader>
          <CardFooter>Tracked from Github</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/103/103"} />
            <CustomText gray>Followers</CustomText>
            <CustomText large>+245</CustomText>
          </CardHeader>
          <CardFooter>Just Updated</CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem>
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
      <GridItem>
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
      <GridItem>
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
      <GridItem>
        <Card>
          <CardTitle>
            <CustomText large>Employees Stats</CustomText>
            <CustomText gray>New employees on 15th September, 2016</CustomText>
          </CardTitle>
          <Table head={['ID', 'Name', 'Salary', 'Country']}>
            {DummyTable.map(each => <TableRow data={each} />)}
          </Table>
        </Card>
      </GridItem>
      <GridItem>
        <Table>
          
        </Table>
      </GridItem>
    </GridContainer>
    </>
  );
};

export default Dashboard;