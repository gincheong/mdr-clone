import React from 'react';
import styled from 'styled-components';

const STableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const STableData = styled.td`
  padding: 10px 10px 15px 10px;
`;

const TableRow = (props: Props) => {
  const { data } = props;

  return (
    <>
    <STableRow>
      {data.map(each => {
        return (
          <STableData>{each}</STableData>
        )
      })
      }
    </STableRow>
    </>
  );
};

interface Props {
  data: Array<string>;
}

export default TableRow;