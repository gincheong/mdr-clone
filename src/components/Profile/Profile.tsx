import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton, CustomInput, CustomText, CustomTextarea } from '../../components';
import { GridContainer, GridItem } from '../../components';

const SContainer = styled.div``;

const Profile = () => {

  return (
    <SContainer>
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
    </SContainer>
  );
};

export default Profile;
