import React from 'react';
import styled from 'styled-components';
// Components
import TableRow from './TableRow';

const STable = styled.table`
  border-collapse: collapse;
`;

const SThead = styled.thead`
  color: #567ace;
`;

const Table = (props: Props) => {
  const { children, head } = props;

  return (
    <STable>
      <SThead>
        <TableRow data={head ?? []} />
      </SThead>
      <tbody>
        {children}
      </tbody>
    </STable>
  );
};

interface Props {
  children: React.ReactNode;
  head?: string[];
}

export default Table;