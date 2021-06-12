import React from "react";

export default function CustomInput(props) {
  return (
    <React.Fragment>
      <label className="text-white" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type ? props.type : "text"}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => props.callback(event.target.value)}
        style={{
          color: "grey",
        }}
      />
    </React.Fragment>
  );
}
