import React from "react";

const CompletedTask = ({ data }) => {
  const cellStyle = {
    padding: "10px",
    margin: "10px",
    textAlign: "left",
    fontSize: "12px",
    borderBottom: "1px solid #ccc",
  };

  const emailStyle = {
    fontSize: "14px",
    color: "rgb(86, 86, 86)",
  };

  return (
    <table style={{ borderCollapse: "collapse" }} className="table-data">
      <thead className="table-head">
        <tr>
          <th style={cellStyle} className="mainn">
            User
          </th>
          <th style={cellStyle}>Risk level</th>
          <th style={cellStyle}>Action reason</th>
          <th style={cellStyle}>Time to close</th>
          <th style={cellStyle}>Data added on</th>
          <th style={cellStyle} className="maint">
            Action taken by
          </th>
        </tr>
      </thead>
      <tbody className="line">
        {data.map((item) => (
          <tr key={item.id}>
            <td style={cellStyle}>
              <div>{item.name}</div>
              <div style={emailStyle}>{item.email}</div>
            </td>
            <td style={cellStyle}>{item.risk}</td>
            <td style={cellStyle}>{item.actionReason}</td>
            <td style={cellStyle}>{item.timeToClose} days</td>
            <td style={cellStyle}>{item.dateAdd}</td>
            <td style={cellStyle}>
              <div>{item.actionBy}</div>
              <div style={emailStyle}>{item.actionByEmail}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompletedTask;
