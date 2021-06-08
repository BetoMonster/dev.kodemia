import React, { useState } from "react";

import "./styles.css";

export default function Challenge() {
  const [activeItem, setActiveItem] = useState(0);

  const menu = ["item 1", "item 2", "item 3", "item 4"];

  return (
    <ul>
      {menu.map((item, index) => (
        <li
          className={`btn ${activeItem === index ? "active" : null}`}
          onClick={() => setActiveItem(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/*import React from "react";
import AppList from "../../components/AppList";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-md-3 col-lg-3"></div>
          <div className="col-12 col-md-9 col-lg-6 ">
            <AppList />
          </div>
          <div className="col-lg-3 "></div>
        </div>
      </div>
    </React.Fragment>
  );
}*/
