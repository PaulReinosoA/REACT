import React, { useState, useEffect } from 'react';
import { DataGrid, GridLogicOperator } from '@mui/x-data-grid';
import { esES } from '@mui/x-data-grid/locales';

const columns = [
  { field: 'id', headerName: 'ID', filterable: true },
  { field: 'title', headerName: 'Titulo', width: 450, filterable: true },
  { field: 'modified', headerName: 'modificacion', width: 200 },
  { field: 'variantDescription', headerName: 'Description', width: 200 },
  { field: 'issueNumber', headerName: 'NumeroEvento' },
  {
    field: 'thumbnail',
    headerName: 'Portada',    
    editable: true,
    renderCell: (params) => {
      return (
        <div className="card-grid">
          <div className="card">
            <img src={`${params.value.path}.jpg`} />
          </div>
        </div>
      );      
    },
  },
  {
    field: 'creators',
    headerName: 'Autor',    
    editable: true,
    filterable: true,
    renderCell: (params) => params.value.items[0] === undefined ? 'Anonimo' :  params.value.items[0].name 
    
  },
];

export const DataGridView = () => {
  const [tableData, setTableData] = useState([]);
  const url =
    'http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=c6671638880e82d6ea764ca12b6d496d&hash=899b4663af77b12d1801f3e1039c1aaa&limit=100';
  useEffect(() => {
    // https://jsonplaceholder.typicode.com/posts
    // http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=c6671638880e82d6ea764ca12b6d496d&hash=899b4663af77b12d1801f3e1039c1aaa
    fetch(url) 
      .then((data) => data.json())
      .then((data) => setTableData(data.data.results));
  }, []);

  const filterModel = {
    items: [
      { id: 2, field: 'title', operator: 'contains', value: 'a' },
      { id: 1, field: 'issueNumber', operator: '>', value: '4' },
    ],
    logicOperator: GridLogicOperator.Or,
  };

  console.log(tableData);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        initialState={{
          filter: {
            filterModel: filterModel,
          },
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        pageSizeOptions={[25, 50, 100]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
};
