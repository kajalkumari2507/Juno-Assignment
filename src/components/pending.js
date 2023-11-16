import React from "react";

const PendingTask = ({ data }) => {
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
  const dateStyle = {
    fontSize: "12px",
    color: "rgb(86, 86, 86)",
  };

  return (
      <table style={{ borderCollapse: "collapse" }} className="table-data">
        <thead className='table-head'>
          <tr>
            <th style={cellStyle} className="mainn">User</th>
            <th style={cellStyle}>Risk level</th>
            <th style={cellStyle}>Trigger reason</th>
            <th style={cellStyle}>In queue for</th>
            <th style={cellStyle}>Data added on</th>
            <th style={cellStyle} className="maint">Previously reviewed</th>
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
              <td style={cellStyle}>{item.triggerReason}</td>
              <td style={cellStyle}>{item.queueDay} days</td>
              <td style={cellStyle}>{item.dateAdd}</td>
              <td style={cellStyle}>
                <div>{item.reviewed ? "Yes" : "No"}</div>
                <div style={dateStyle}>{item.reviewDate}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default PendingTask;
