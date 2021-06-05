import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton, CustomInput } from '../../components';

const SearchIcon = styled.div`
  border: 1px solid #ddd;
  background-color: #eee;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  height: 40px;
  width: 40px;

  & svg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }
`;

const HeaderSearchBar = () => {
  return (
    <>
      <CustomInput type='text' labelType='placeholder' labelString='Search' />
      <CustomButton
        rippleColor='dark'
        style={{
          padding: 0,
          borderRadius: '50px'
        }}
      >
        <SearchIcon>
          <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        </SearchIcon>
      </CustomButton>
    </>
  );
};

export default HeaderSearchBar;