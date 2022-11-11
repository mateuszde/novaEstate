import { apartmentsData } from './apartmentsData';
import { headerData } from './headerData';
import { Wrapper } from './style';

import TableRow from './TableRow/TableRow';
import TableRows from './TableRows/TableRows';

const Table = () => {
  return (
    <Wrapper>
      <TableRow
        number={headerData.number}
        area={headerData.area}
        landArea={headerData.landArea}
        availability={headerData.availability}
        price={headerData.price}
        bold={true}
      />

      <TableRows data={apartmentsData} />
    </Wrapper>
  );
};

export default Table;
