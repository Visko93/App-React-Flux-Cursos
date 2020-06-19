import React from 'react';

function SelectInput (props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="0" ></option>
          {props.authors.map((author) => (
            <option value={author.id} key={author.id}>{author.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


export default SelectInput;