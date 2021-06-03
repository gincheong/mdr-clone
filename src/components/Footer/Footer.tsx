import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton, CustomText } from '../../components';

const SFooter = styled.footer`
  bottom: 0;
  display: flex;
`;

const SButtonContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SSignature = styled.div`
  margin: 20px;
  align-self: center;
`;

const Footer = () => {
  return (
    <SFooter>
      <SButtonContainer>
        <CustomButton rippleColor='light' style={{ color: '#000', margin: '10px 0px 10px 10px' }}>
          <CustomText medium bold>HOME</CustomText>
        </CustomButton>
        <CustomButton rippleColor='light' style={{ color: '#000', margin: '10px 0px 10px 10px' }}>
          <CustomText medium bold>COMPANY</CustomText>
        </CustomButton>
        <CustomButton rippleColor='light' style={{ color: '#000', margin: '10px 0px 10px 10px' }}>
          <CustomText medium bold>PORTFOLIO</CustomText>
        </CustomButton>
        <CustomButton rippleColor='light' style={{ color: '#000', margin: '10px 0px 10px 10px' }}>
          <CustomText medium bold>BLOG</CustomText>
        </CustomButton>
      </SButtonContainer>
      <SSignature>
        <CustomText small>
          gincheong2@gmail.com, github.com/gincheong
        </CustomText>
      </SSignature>
    </SFooter>
  );
};

export default Footer;