import React, { useEffect, useState } from "react";
import PendingTask from "./pending";
import CompletedTask from "./completed";
import userData from "../data/user.json";
import Filter from "./filter";

const MainContent = () => {
  const [jsonData, setJsonData] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showPending, setShowPending] = useState(true);

  const handleCompletedClick = () => {
    setShowCompleted(true);
    setShowPending(false);
  };

  const handlePendingClick = () => {
    setShowCompleted(false);
    setShowPending(true);
  };

  useEffect(() => {
    setJsonData(userData);
  }, []);

  return (
    <div className="col-md-9 article-right">
      <h1 className="heading">Monitoring</h1>
      <div className="tab-heading">
        <div className="tabs">
          <div className="tab-item item-a" onClick={handlePendingClick}>
            Pending
          </div>
          <div className="tab-item item-b" onClick={handleCompletedClick}>
            Completed
          </div>
        </div>
        <div className="button-class">
          <button
            type="button"
            class="btn btn-outline-danger"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </span>
            <span className="btn-name">Close account</span>
          </button>
        </div>
      </div>
      {/* <hr /> */}

      <div>
        <Filter />
      </div>

      <div className="tab-content">
        {showCompleted && <CompletedTask data={jsonData} />}
        {showPending && <PendingTask data={jsonData} />}
      </div>
    </div>
  );
};

export default MainContent;
