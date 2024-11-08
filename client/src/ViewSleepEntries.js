// src/ViewSleepEntries.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewSleepEntries() {
  const [entries, setEntries] = useState([]);
  const userId = "sampleUserId"; // Replace with actual user ID

  useEffect(() => {
    const fetchEntries = async () => {
      const response = await axios.get(`http://localhost:3000/sleep/${userId}`);
      setEntries(response.data);
    };
    fetchEntries();
  }, []);

  return (
    <div>
      <h2>Sleep Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            Start: {new Date(entry.sleepStart).toLocaleString()} - End:{" "}
            {new Date(entry.sleepEnd).toLocaleString()}, Quality:{" "}
            {entry.quality}, Duration: {entry.duration} hours
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewSleepEntries;
