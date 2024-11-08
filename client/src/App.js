// src/App.js
import React from "react";
import AddSleepEntry from "./AddSleepEntry";
import ViewSleepEntries from "./ViewSleepEntries";

function App() {
  return (
    <div className="App">
      <h1>Sleep Tracker</h1>
      <AddSleepEntry />
      <ViewSleepEntries />
    </div>
  );
}

export default App;
