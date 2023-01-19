import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "../ClientHomePage/Table.css";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "CompanyName", headerName: "Comany Name", width: 130 },
  { field: "position", headerName: "Position", width: 130 },
  {
    field: "location",
    headerName: "Location",
    type: "text",
    width: 90,
  },
  {
    field: "Date",
    headerName: "Interview Date",
    type: "date",
    sortable: true,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, CompanyName: "FaceBook", Position: "Jon", Date: 35, location: null },
  {
    id: 2,
    CompanyName: "Google",
    Position: "Cersei",
    Date: 42,
    location: null,
  },
  {
    id: 3,
    CompanyName: "Instagram",
    Position: "Jaime",
    Date: 45,
    location: null,
  },
  { id: 4, CompanyName: "estarta", Position: "Arya", Date: 16, location: null },
  {
    id: 5,
    CompanyName: "askadenia",
    Position: "Daenerys",
    Date: null,
    location: null,
  },
  { id: 6, CompanyName: "techyjob", Position: null, Date: 150, location: null },
  { id: 7, CompanyName: "It", Position: "Ferrara", Date: 44, location: null },
  {
    id: 8,
    CompanyName: "python",
    Position: "Rossini",
    Date: 36,
    location: null,
  },
  {
    id: 9,
    CompanyName: "cynaptic",
    Position: "Harvey",
    Date: 65,
    location: null,
  },
];

export default function DataTable() {
  return (
    <div class="outerCSS">
      {/* <div style={{ height: 550, width: "50%", float: "right" }} class="Table">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        //   checkboxSelection
        />
      </div> */}
   
    </div>
  );
}