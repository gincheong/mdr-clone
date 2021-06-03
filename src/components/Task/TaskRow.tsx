import React from 'react';
import styled from 'styled-components';
// Components
import { Checkbox, CustomText } from '../../components';
import TaskButton from './TaskButton';

const STaskRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const STableData = styled.td`
  padding: 10px 10px 15px 10px;
`;

const SButtonContainer = styled.div`
  display: flex;
`;

const TaskRow = (props: Props) => {
  const { data } = props;

  return (
    <STaskRow>
      <td>
        <Checkbox key={data} />
      </td>
      <STableData>
        <CustomText medium>{data}</CustomText>
      </STableData>
      <td>
        <SButtonContainer>
          <TaskButton hoverContent='Edit task'>
            <i className="fas fa-pen"></i>
          </TaskButton>
          <TaskButton hoverContent='Remove'>
            <i className="fas fa-times" style={{ color: 'red' }}></i>
          </TaskButton>
        </SButtonContainer>
      </td>
    </STaskRow>
  );
};

interface Props {
  data: string;
}

export default TaskRow;