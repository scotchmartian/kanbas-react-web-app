import React from "react";
// import ReduxExamples from "./reduxExamples";
import PassingFunctions from "./PassingFunctions";
import ParentStateComponent from "./ParentStateComponent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ClickEvent from "./ClickEvent";
import ReduxExamples from "./ReduxExamples";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (

    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
    

      <PassingFunctions theFunction={sayHello} />
      <ParentStateComponent/>

      
      <Counter/>
      
      <ClickEvent/>
      <PassingDataOnEvent/>
      <EventObject/>
      {/* <ReduxExamples/> */}
      <ReduxExamples/>
      </div>
  );
}
