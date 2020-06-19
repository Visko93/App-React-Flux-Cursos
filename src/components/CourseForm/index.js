import React from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

function CourseForm(props) {

  return (
    <form onSubmit={props.onSubmit}>
     
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />
      <>
        <SelectInput
          id="author"
          name="authorId"
          label="Author"
          onChange={props.onChange}
          value={props.course.authorId || ""}
          authors={props.authors}
        />
          {props.errors.authorId && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
          )}
      </>
      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
