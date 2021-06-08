import React from "react";
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
}
