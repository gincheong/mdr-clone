import React from 'react';
// Components
import { GridContainer, GridItem } from '../components';
import { Card, CardProfileDescription, CardProfileImg, CardTitle } from '../components';
import { CustomInput, CustomText, CustomButton, CustomTextarea } from '../components';

const UserProfile = () => {

  return (
    <GridContainer>
      <GridItem size={8}>
        <Card>
          <CardTitle>
            <CustomText large>Edit Profile</CustomText>
            <CustomText small>Complete your profile</CustomText>
          </CardTitle>
          <GridContainer>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='Company (disabled)' disabled />
            </GridItem>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='Username' />
            </GridItem>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='Email Address' />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem size={6}>
              <CustomInput type='text' labelType='label' labelString='First Name' />
            </GridItem>
            <GridItem size={6}>
              <CustomInput type='text' labelType='label' labelString='Last Name' />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='City' />
            </GridItem>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='Country' />
            </GridItem>
            <GridItem size={4}>
              <CustomInput type='text' labelType='label' labelString='Postal Code' />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem size={12}>
              <CustomText bold gray style={{ marginBottom: '20px' }}>About Me</CustomText>
              <CustomTextarea labelType='label'
                labelString="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <CustomButton rippleColor='light' defaultColor="#cee5d5">
              UPDATE PROFILE
            </CustomButton>
          </GridContainer>
        </Card>
      </GridItem>
      <GridItem size={4}>
        <Card>
          <CardProfileImg
            src='https://pbs.twimg.com/profile_images/1335600379090759681/Az89GwTv_200x200.jpg'
          />
          <CardProfileDescription>
            <CustomText gray small>
              CEO / CO-FOUNDER
            </CustomText>
            <br />
            <CustomText>
              Alec Thompson
            </CustomText>
            <br />
            <CustomText small>
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </CustomText>
            <CustomButton
              rippleColor='light'
              defaultColor='#202946'
              style={{
                width: 'fit-content',
                marginTop: '20px',
                color: '#f2f2f2',
              }}
            >
              FOLLOW
            </CustomButton>
          </CardProfileDescription>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default UserProfile;