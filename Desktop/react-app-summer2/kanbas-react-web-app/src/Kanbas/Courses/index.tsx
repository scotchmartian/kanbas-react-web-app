import { Routes, Route, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import PeopleTable from "./People/table";

export default function Courses({ courses }: { courses: any[] }) {
  const [showCourseNavigation, setShowCourseNavigation] = useState(true);
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Piazza" element={<h1>Piazza</h1>} />
            <Route path="/Zoom" element={<h1>Zoom</h1>} />
            <Route path="/Assignments" element={<h1>Assignments</h1>} />
            <Route path="/Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="/Grades" element={<h1>Grades</h1>} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}