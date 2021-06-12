import React, { useEffect, useState } from "react";

import Header from "../../components/Header/";
import SideNav from "../../components/SideNav/";
import Posts from "../../components/Posts";
import Listing from "../../components/Listing/";
import Counter from "../../components/Counter";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://react-11g-default-rtdb.firebaseio.com/posts.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  //console.log(data.results);

  return (
    <React.Fragment>
      <Header />
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-md-3 col-lg-2 d-md-flex d-none p-0 mt-3">
            <SideNav />
            <aside className="left-aside"></aside>
          </div>
          <div className="col-12 col-md-9 col-lg-7 p-0 px-md-2">
            <Posts
              data={Object.entries(data).length ? Object.entries(data) : []}
            />
            <Counter />
          </div>
          <div className="col-lg-3 d-lg-block d-none p-0">
            <aside className="rigth-aside">
              <Listing />
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
