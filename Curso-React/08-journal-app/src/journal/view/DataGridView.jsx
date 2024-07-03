import React, { useState, useEffect } from 'react';
import { DataGrid, GridLogicOperator } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';
import { CustomNoRowsOverlay } from '../components/StyleGridOverlay';
import { getData } from '../helpers/getData';

// const columns = [
//   { field: 'id', headerName: 'ID', filterable: true },
//   { field: 'title', headerName: 'Titulo', width: 450, filterable: true },
//   { field: 'modified', headerName: 'modificacion', width: 200 },
//   { field: 'variantDescription', headerName: 'Description', width: 200 },
//   { field: 'issueNumber', headerName: 'NumeroEvento' },
//   {
//     field: 'thumbnail',
//     headerName: 'Portada',
//     editable: false,
//     renderCell: (params) => (
//       <div className="card-grid">
//         <div className="card">
//           <img src={`${params.value.path}.jpg`} />
//         </div>
//       </div>
//     ),
//   },
//   {
//     field: 'creators',
//     headerName: 'Autor',
//     editable: false,
//     filterable: true,
//     renderCell: (params) =>
//       params.value.items[0] === undefined
//         ? 'Anonimo'
//         : params.value.items[0].name,
//   },
// ];

const columns = [
  { field: 'id', headerName: 'ID', filterable: true },
  { field: 'title', headerName: 'Titulo', filterable: true, width: 450 },
  { field: 'date', headerName: 'modificacion', width: 200 },
  { field: 'variantDescription', headerName: 'Description', width: 300 },
  { field: 'issueNumber', headerName: 'NumeroEvento' },
  {
    field: 'image',
    headerName: 'NumeroEvento',
    editable: false,
    renderCell: (image) => (
      <div className="card-grid">
        <div className="card">
          <img src={image.value} />
        </div>
      </div>
    ),
    width: 100,
  },
  { field: 'creators', headerName: 'Autor', editable: false, width: 200 },
];

export const DataGridView = () => {
  // https://jsonplaceholder.typicode.com/posts
  const [tableData, setTableData] = useState([]);
  const [loading, setloading] = useState(true);

  const { dataClean, isLoading } = getData();
  console.log('DataGridView:dataClean', dataClean, isLoading);

  const url =
    'http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=c6671638880e82d6ea764ca12b6d496d&hash=899b4663af77b12d1801f3e1039c1aaa&limit=100';
  useEffect(() => {
    setloading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setTableData(data.data.results);
        setloading(false);
      })
      .catch(() => {
        setloading(false);
        setTableData([]);
      });
  }, []);

  const filterModel = {
    items: [{ id: 2, field: 'title', operator: 'contains', value: 'a' }],
    logicOperator: GridLogicOperator.Or,
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
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
        loading={loading}
        slots={{
          noRowsOverlay: () => <CustomNoRowsOverlay message="Sin filas" />,
          noResultsOverlay: () => (
            <CustomNoRowsOverlay message="No se han encontrado resultados." />
          ),
        }}
      />
    </div>
  );
};
