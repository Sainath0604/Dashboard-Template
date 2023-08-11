// YourComponent.js
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const rowClassRules = {
  "even-row": (params) => params.node.rowIndex % 2 === 0,
  "odd-row": (params) => params.node.rowIndex % 2 !== 0,
};

const TableAG = () => {
  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true },
    { headerName: "Name", field: "name", sortable: true },
    { headerName: "Age", field: "age", sortable: true },
    // Add more columns with floatingFilter: true
  ];

  const rowData = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    // Add more rows as needed
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        rowClassRules={rowClassRules} // Add this line
      />
    </div>
  );
};

export default TableAG;
