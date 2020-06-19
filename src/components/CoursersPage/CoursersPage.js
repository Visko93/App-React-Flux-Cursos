import React, { useState, useEffect } from "react";
import courseStore from "../../stores/couseStore";
import { loadCourses, deleteCourse } from '../../actions/courseActions';
import { getAuthors } from "../../api/authorApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
    
  }, []);

  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));   
  }, []);

  function onChange () {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList 
        courses={courses} 
        authors={authors}
        deleteCourse={deleteCourse}
      />
    </>
  );
}

export default CoursesPage;
