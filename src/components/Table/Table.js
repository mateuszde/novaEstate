import { Wrapper } from './style';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'NR',
    width: 80,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'area',
    headerName: 'POWIERZCHNIA [m2]',
    type: 'number',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'landArea',
    headerName: 'DZIAŁKA [m2]',
    type: 'number',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'availability',
    headerName: 'DOSTĘPNOŚĆ',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'price',
    headerName: 'CENA [zł]',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  { id: '3A', landArea: 60, area: 75, availability: 'DOSTĘPNE', price: '560 000' },
  { id: '3B', landArea: 70, area: 42, availability: 'SPRZEDANE', price: '600 000' },
  { id: '4A', landArea: 80, area: 65, availability: 'REZERWACJA', price: '650 000' },
  { id: '5C', landArea: 100, area: 101, availability: 'DOSTĘPNE', price: '700 000' },
];

const Table = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', height: '100%', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} pageSize={4} rowsPerPageOptions={[4]} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Table;
