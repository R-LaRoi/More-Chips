import React, { useState } from "react";
import "./monday.css";

export default function Monday() {
  const [getWord, setGetWord] = useState("moody");
  const [moodWord, setMoodWord] = useState(getWord);

  function showWord(event) {
    event.preventDefault();
    setMoodWord(getWord);
  }

  function handleChange(event) {
    setGetWord(event.target.value);
  }

  return (
    <div className="monday-header">
      <div className="title">
        <a href="/" id="mon">
          <div>
            {moodWord}
            <br />
            monday
          </div>
        </a>
      </div>
      <form onSubmit={showWord}>
        <input
          type="text"
          placeholder="what word describes your mood today?"
          name="moodWord"
          onChange={handleChange}
        ></input>
      </form>

      <div className="monday-questions">
        <div className="q-card">
          <div className="mon-q">what is motivating you today?</div>{" "}
          <textarea placeholder="enter text here"></textarea>
        </div>
        <div className="q-card">
          <div className="mon-q">what are you listening to today?</div>{" "}
          <textarea placeholder="enter text here"></textarea>
        </div>
        <div className="q-card">
          <div className="mon-q">what are you reading today?</div>{" "}
          <textarea placeholder="enter text here"></textarea>
        </div>
      </div>
    </div>
  );
}
