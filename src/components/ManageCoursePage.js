import React, { useState, useEffect } from "react";
import courseStore from "../stores/couseStore";
import authorStore from "../stores/authorStore";
import * as courseActions from "../actions/courseActions";
import { loadAuthors } from "../actions/authorActions";
import CourseForm from "./CourseForm";
import { toast } from 'react-toastify';

const ManageCoursePage = (props) => {

  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug:"",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    authorStore.addChangeListener(onChangeAuthors)
    if(authorStore.getAuthors() === 0) loadAuthors();
    console.log(loadAuthors());
    return () => authorStore.removeChangeListener(onChangeAuthors)
  }, []);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    
    if (courses.length === 0){
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function handleChange({target}) {
    setCourse({ ...course, [target.name]: target.value });
  }
  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    
    courseActions.saveCourse(course).then(() => {
      props.history.push('/courses');
      toast.success('Course saved.');
    });
  }
  function onChange() {
    setCourses(courseStore.getCourses());

  }
  function onChangeAuthors () {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Manage Course</h2>
      {props.match.params.slug}
      <CourseForm 
        errors={errors}
        course={course}
        onChange={handleChange}
        authors={authors}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
