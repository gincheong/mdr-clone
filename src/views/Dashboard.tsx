import React from 'react';
// Components
import { Card, CardIcon, CardHeader, CardTitle, CardDescription, CardFooter } from '../components';
import { GridContainer, GridItem } from '../components';

const Dashboard = () => {

  return (
    <GridContainer>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/100/100"} />
            <CardTitle>Used Space</CardTitle>
            <CardDescription>
              49/50 <small>GB</small>
            </CardDescription>
          </CardHeader>
          <CardFooter>Get more space</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/101/101"} />
            <CardTitle>Revenue</CardTitle>
            <CardDescription>$34,245</CardDescription>
          </CardHeader>
          <CardFooter>Last 24 Hours</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/102/102"} />
            <CardTitle>Fixed Issues</CardTitle>
            <CardDescription>75</CardDescription>
          </CardHeader>
          <CardFooter>Tracked from Github</CardFooter>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader icon>
            <CardIcon src={"https://random.imagecdn.app/103/103"} />
            <CardTitle>Followers</CardTitle>
            <CardDescription>+245</CardDescription>
          </CardHeader>
          <CardFooter>Just Updated</CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Dashboard;