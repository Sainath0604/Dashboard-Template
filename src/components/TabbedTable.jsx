import { useState } from "react";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";

const TabbedTable = () => {
  const [activeTab, setActiveTab] = useState("tableOne");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabChange("tableOne")}
          className={`Tabbt ${activeTab === "tableOne" ? "activebt" : ""}`}
        >
          Incoming
        </button>
        <button
          onClick={() => handleTabChange("tableTwo")}
          className={`Tabbt ${activeTab === "tableTwo" ? "activebt" : ""}`}
        >
          Invoices
        </button>
      </div>
      {activeTab === "tableOne" && <TableOne />}
      {activeTab === "tableTwo" && <TableTwo />}
    </div>
  );
};

export default TabbedTable;
