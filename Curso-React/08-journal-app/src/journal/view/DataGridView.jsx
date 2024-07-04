import { DataGrid, GridLogicOperator } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import { Box, Grid } from '@mui/material';
import { CustomNoRowsOverlay } from '../components/StyleGridOverlay';
import { getData } from '../helpers/getData';

const columns = [
  { field: 'id', headerName: 'ID', filterable: true },
  { field: 'title', headerName: 'Titulo', filterable: true, width: 450 },
  { field: 'date', headerName: 'modificacion', width: 200 },
  { field: 'variantDescription', headerName: 'Description', width: 450 },
  { field: 'issueNumber', headerName: 'NumeroEvento', width: 100 },
  {
    field: 'image',
    headerName: 'NumeroEvento',
    editable: false,
    width: 100,
    renderCell: (image) => (
      <div className="card-grid">
        <div className="card">
          <img alt="imagen" src={image.value} />
        </div>
      </div>
    ),
  },
  { field: 'creators', headerName: 'Autor', editable: false, width: 200 },
];

export const DataGridView = () => {
  const { dataClean, isLoading } = getData();

  const filterModel = {
    items: [{ id: 2, field: 'title', operator: 'contains', value: 'a' }],
    logicOperator: GridLogicOperator.Or,
  };

  return (
    <Grid container>
      <Box
        sx={{
          height: 700,
          minWidth: { ml: 'calc(100% - 100px)' },
        }}
      >
        <DataGrid
          rows={dataClean}
          columns={columns}
          pageSize={12}
          initialState={{
            filter: {
              filterModel,
            },
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          pageSizeOptions={[25, 50, 100]}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          loading={isLoading}
          slots={{
            noRowsOverlay: () => <CustomNoRowsOverlay message="Sin filas" />,
            noResultsOverlay: () => (
              <CustomNoRowsOverlay message="No se han encontrado resultados." />
            ),
          }}
        />
      </Box>
    </Grid>
  );
};
