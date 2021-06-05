import React from 'react';
// Components
import { GridContainer, GridItem } from '../components';
import { Card, CardTitle } from '../components';
import { CustomText } from '../components';
import { Profile } from '../components';

const UserProfile = () => {

  return (
    <GridContainer>
      <GridItem size={8}>
        <Card>
          <CardTitle>
            <CustomText large>Edit Profile</CustomText>
            <CustomText small>Complete your profile</CustomText>
          </CardTitle>
          <Profile />
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          asdqwe
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default UserProfile;