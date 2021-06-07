// Components
import { GridContainer, GridItem } from '../components';
import { Card, CardTitle } from '../components'
import { CustomText } from '../components';
import { Table, TableRow } from '../components';
// DummyData
import DummyTable from '../data/dummyTable';
import DummyTable2 from '../data/dummyTable2';

const TableList = () => {

  return (
    <>
    <GridContainer>
      <GridItem size={12}>
        <Card>
          <CardTitle>
            <CustomText>Simple Table</CustomText>
            <CustomText small gray>Here is a subtitle for this table</CustomText>
          </CardTitle>
          <Table head={['Name', 'Country', 'City', 'Salary']}>
            {DummyTable.map(each => <TableRow key={each.join()} data={each} />)}
          </Table>
        </Card>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem size={12}>
        <Card transparent>
          <CardTitle transparent>
            <CustomText>Table on Plain Background</CustomText>
            <CustomText small gray>Here is a subtitle for this table</CustomText>
          </CardTitle>
          <Table head={['ID', 'Name', 'Country', 'City', 'Salary']}>
            {DummyTable2.map(each => <TableRow key={each.join()} data={each} />)}
          </Table>
        </Card>
      </GridItem>
    </GridContainer>
    </>
  );
};

export default TableList;