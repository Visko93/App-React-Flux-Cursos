import React from "react";
import HomePage from "./HomePage/Homepage";
import AboutPage from "./AboutPage/AboutPage";
import Header from "./comum/Header/Header";
import CoursesPage from "./CoursersPage/CoursersPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="about" to="About" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
