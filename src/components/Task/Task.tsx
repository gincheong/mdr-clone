import React from 'react';
import styled from 'styled-components';
// Components
import { CustomButton, CustomText, Table } from '../../components';
import TaskRow from './TaskRow';

const STaskContainer = styled.div``;

const STaskHeader = styled.div`
  background: linear-gradient(to right, #f1d2e7, #bbb0dc);
  
  display: flex;
  align-items: center;

  border-radius: 5px;
  padding: 15px 30px;
  margin-top: -40px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
`;

const Task = (props: Props) => {
  const { tasks } = props;

  const [selectedCategory, setSelectedCategory] = React.useState(Object.keys(tasks)[0]);

  const onClick = (event: React.MouseEvent) => {
    const $target = event.target as HTMLDivElement;
    const category = $target.innerText.toLowerCase();
    setSelectedCategory(category);
  };

  return (
    <STaskContainer>
      <STaskHeader>
        Tasks : 
        {Object.keys(tasks).map(each => 
          <CustomButton
            key={each}
            rippleColor='light'
            style={{ marginLeft: '10px' }}
            onClick={onClick}
            selectedColor="rgba(255, 255, 255, 0.4)"
            isSelected={selectedCategory === each}
          >
            <CustomText small>{each.toUpperCase()}</CustomText>
          </CustomButton>
        )}
      </STaskHeader>
      <Table>
        {tasks[selectedCategory].map(each => <TaskRow key={each} data={each} />)}
      </Table>
    </STaskContainer>
  );
};

interface Props {
  tasks: { [key: string]: string[] };

}

export default Task;