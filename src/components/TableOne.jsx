// TableOne.js

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TableOne = () => {
  const columnDefs = [
    { headerName: "Invoice ID", field: "id", sortable: true },
    { headerName: "Date", field: "date", sortable: true },
    { headerName: "Description", field: "description", sortable: true },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: () => (
        <span className="p-1 rounded-3xl bg-emerald-600 text-white text-xs">
          Completed
        </span>
      ),
    },
    { headerName: "Descriptions", field: "descriptions", sortable: true },
  ];

  const rowData = [
    {
      id: "M063592DR2",
      date: "08.04.2021",
      description: "Code 5928MD01",
      status: "",
      descriptions: "$2500.00",
    },
    {
      id: "M063592DR2",
      date: "08.04.2021",
      description: "Code 5928MD01",
      status: "",
      descriptions: "$2500.00",
    },
    {
      id: "M063592DR2",
      date: "08.04.2021",
      description: "Code 5928MD01",
      status: "",
      descriptions: "$2500.00",
    },
    {
      id: "M063592DR2",
      date: "08.04.2021",
      description: "Code 5928MD01",
      status: "",
      descriptions: "$2500.00",
    },
    {
      id: "M063592DR2",
      date: "08.04.2021",
      description: "Code 5928MD01",
      status: "",
      descriptions: "$2500.00",
    },
    // Add more rows as needed
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

export default TableOne;
