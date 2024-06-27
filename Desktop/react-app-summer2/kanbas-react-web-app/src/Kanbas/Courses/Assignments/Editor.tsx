export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3><label htmlFor="wd-name">Assignment Name</label></h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of the assignment
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points"><b>Points</b></label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
        </table>
        <br />
        <div>
        <label htmlFor="wd-group"> <b>Assignment Group:</b> </label><br/>
<select id="wd-group">
   <option value="Assignment Group 1">Assignment 1</option>
   <option value="Assignment Group 2">Assignment 2</option>
   <option value="Assignment Group 3">Assignment 3</option>
   <option selected value="Assignment Group 4">
       Assingment 4</option>
       <option value="Assignment Group 5">Assignment 5</option>
</select>
    <br /><br />
</div>
<div>
<label htmlFor="wd-display-grade-as"> <b>Display Grade as:</b> </label><br/>
<select id="wd-display-grade-as">
   <option value="Percent">A Percentage</option>
   <option value="Letter">A letter grade</option>
   <option value="Fraction">A Fraction</option>
   <option selected value="Decimal">
       A Decimal</option>
       <option value="Weirdo Option">Don't Display</option>
</select>
<br /><br />
</div>
<div>
<label htmlFor="wd-submission-type"> <b>Submission Type</b> </label><br/>
<select id="wd-submission-type">
   <option value="Canvas">Online (canvas)</option>
   <option value="Email">Email</option>
   <option value="Class">In Class</option>
   <option selected value="Fax">
       Faxed</option>
       <option value="Magic">Telepathic Download</option>
</select></div>
<br /><br />
<label htmlFor="wd-text-entry"> <b>Online Entry Options</b> </label><br/>

<input type="checkbox" name="check-entry" id="wd-text-entry"/>
<label htmlFor="wd-chkbox-text">Text Entry</label><br/>

<input type="checkbox" name="check-entry" id="wd-website-url"/>
<label htmlFor="wd-chkbox-website">Website URL</label><br/>

<input type="checkbox" name="check-entry" id="wd-media-recordings"/>
<label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

<input type="checkbox" name="check-entry" id="wd-student-annotation"/>
<label htmlFor="wd-chkbox-annotation">Student Annotation</label>

<input type="checkbox" name="check-entry" id="wd-file-upload"/>
<label htmlFor="wd-chkbox-upload">File Upload</label>
<br /><br />
<h3>Assign</h3>
<label htmlFor="wd-text-fields-username">Assign To: </label>
    <input id="wd-assign-to" placeholder="write option" value="Everyone" title="who's it assigned to"/> <br />


<br /><br />
<label htmlFor="wd-text-due-date"> Due Date: </label>
<input type="date"
      id="wd-due-date"
      value="2024-13-05"/><br/>
      <label htmlFor="wd-text-due-date"> Due Date: </label>
      <br /><br />
<input type="date"
      id="wd-available-from"
      value="2024-06-05"/><br/>
      <label htmlFor="wd-text-due-date"> Due Date: </label>
      <br /><br />
<input type="date"
      id="wd-available-until"
      value="2024-20-05"/><br/>
      <br /><br />
<button>Cancel</button>
<button>Save</button>
<br /><br /><br /><br />
<br /><b /><b />
</div>
  );}
  