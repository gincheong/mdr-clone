import React from 'react';
import styled from 'styled-components';

const STaskHeader = styled.div`
  background-color: #bbb0dc;

  border-radius: 5px;
  padding: 15px 30px;
  margin-top: -40px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
`;

const TaskHeader = (props: Props) => {

  return (
    <STaskHeader>
      Tasks : 
    </STaskHeader>
  );
};

interface Props {}

export default TaskHeader;
