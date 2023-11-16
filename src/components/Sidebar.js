import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-3 article-left side-line">
      <div className="logo">
        <span className="logo-name">logo here</span>
      </div>
        <div className="side-items">
          <ul className="side-bar">
            <li>
              <a href="#" className="list-name mbr">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="list-name mbr">
                Onboarding
              </a>
            </li>
            <li>
              <a href="#" className="list-name mbr cls">
                Monitoring
              </a>
            </li>
            <li>
              <a href="#" className="list-name mbr">
                Flagging
              </a>
            </li>
            <li>
              <a href="#" className="list-name mbr">
                Source of Income
              </a>
            </li>
            <li>
              <a href="#" className="list-name mbr">
                UAR
              </a>
            </li>
          </ul>

        </div>

      </div>
  );
};

export default Sidebar;
