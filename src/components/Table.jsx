import TabbedTable from "./TabbedTable";

function Table() {
  return (
    <div className="flex flex-col p-2 divtable shadow-lg">
      <div>
        <h3>
          Recent Transactions
          <button className="float-right exportbtn">
            <i className="fas fa-user"></i>Export
          </button>
        </h3>
      </div>
      <TabbedTable />
      <div></div>
      <div></div>
    </div>
  );
}

export default Table;
