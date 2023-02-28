import React from "react";
import "./tue.css";

export default function Tuesday() {
  const [strengths, setStrengths] = React.useState("");
  //const [displayStrength, setDisplayStrength] = React.useState(strengths);

  //function handleInput(event) {
  //  event.preventDefault;
  //  setDisplayStrength(strengths);
  //  console.log(displayStrength);
  //}

  function handleStrengths(event) {
    setStrengths(event.target.value);
    console.log(strengths);
  }

  return (
    <div className="tue-card">
      <div className="title-tue">
        <a href="/" id="tue">
          tuff <br />
          tuesday
        </a>
      </div>
      <div className="sub-quote">nothing is impossible</div>

      <textarea
        id="tue-strength"
        placeholder="name your strengths"
        name="strengths"
        onChange={handleStrengths}
      >
        {" "}
      </textarea>

      <div className="tue-container">
        <div className="q-card" id="tue-q">
          <div>what challenge are you facing today?</div>{" "}
          <textarea placeholder="enter text here"></textarea>
        </div>
        <div className="q-card" id="tue-q">
          <div>
            using your strengths, what step can you take to handle this
            challenge?
          </div>{" "}
          <textarea placeholder="enter text here"></textarea>
        </div>
      </div>
    </div>
  );
}
