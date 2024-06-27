import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";

export default function Assignments() {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
      <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
              <h2>Assignments</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </button>
      
    </div>
  );
}

      <div id="wd-assignments" style={{ width: "300px" }}>
        
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
    
          </li>
          <li className="wd-assignment-list-item"><b>Multiple Modules</b> | <b>Not Available Until</b> May 8th at 2:00pm | Due May 15th at 11:59pm | 100 pts
            {/* Complete On Your Own */}
          </li>
        </ul>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
    
          </li> 
          <li className="wd-assignment-list-item"><b>Multiple Modules</b> | <b>Not Available Until </b>May 16th at 2:00pm | <b>Due</b> May 22nd at 11:59pm | 100 pts
            {/* Complete On Your Own */}
          </li>
        </ul>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
    
          </li>
          <li className="wd-assignment-list-item"><b>Multiple Modules</b> |<b> Not Available Until</b> May 23rd at 2:00pm | <b>Due</b> May 30th at 11:59pm | 100 pts
            {/* Complete On Your Own */}
          </li>
        </ul>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A4 - MORE DIFFICULT STUFF THAT WILL HURT YOUR FEELINGS
            </a>
    
          </li>
          <li className="wd-assignment-list-item"><b>Multiple Modules</b> | <b>Not Available Until</b> May 31st at 2:00pm |<b>Due</b> June 6th at 11:59pm | 100 pts
            {/* Complete On Your Own */}
          </li>
        </ul>
      </div>
 
  