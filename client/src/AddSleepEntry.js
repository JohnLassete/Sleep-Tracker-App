// src/AddSleepEntry.js
import React, { useState } from "react";
import axios from "axios";

function AddSleepEntry() {
  const [sleepStart, setSleepStart] = useState("");
  const [sleepEnd, setSleepEnd] = useState("");
  const [quality, setQuality] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = "sampleUserId"; // Replace with actual user ID in real-world app
    const response = await axios.post("http://localhost:3000/sleep/add", {
      userId,
      sleepStart,
      sleepEnd,
      quality,
    });
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Start Time:</label>
      <input
        type="datetime-local"
        onChange={(e) => setSleepStart(e.target.value)}
        required
      />

      <label>End Time:</label>
      <input
        type="datetime-local"
        onChange={(e) => setSleepEnd(e.target.value)}
        required
      />

      <label>Sleep Quality (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        required
      />

      <button type="submit">Add Sleep Entry</button>
    </form>
  );
}

export default AddSleepEntry;
