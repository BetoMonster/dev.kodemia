import React, { useState, useEffect } from "react";

function AppList() {
  const [active, setActive] = useState("");

  useEffect(() => {
    //document.body.setAttribute("theme", theme);
    console.log(active);
  }, []);

  useEffect(() => {
    //document.body.setAttribute("theme", theme);
    console.log(active);
  }, [active]);

  const selectItem = (event) => {
    const itemActive = event.target.dataset.value;

    console.log(itemActive);
    setActive(itemActive);
    return;
  };

  return (
    <ul className="list-group">
      <li className="list-group-item" data-value="0" onClick={selectItem}>
        uno
      </li>
      <li className="list-group-item" data-value="1" onClick={selectItem}>
        dos
      </li>
      <li className="list-group-item" data-value="2" onClick={selectItem}>
        tres
      </li>
      <li className="list-group-item" data-value="3" onClick={selectItem}>
        cuatro
      </li>
      <li className="list-group-item" onClick={selectItem}>
        cinco
      </li>
    </ul>
    /*<select name="" id="list" onChange={selectItem(this.value)} multiple="true">
      <option value="1">uno</option>
      <option value="2">dos</option>
      <option value="3">tres</option>
      <option value="4">cuatro</option>
    </select>*/
  );
}
/*

*/
export default AppList;
