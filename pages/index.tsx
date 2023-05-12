import Link from "next/link";
import { useState } from "react";

const yogaPosesData = [
  { src: "#", description: "1. Describing the pose" },
  { src: "#", description: "2. History of the pose" },
  { src: "#", description: "3. Context around the pose" },
];

const handleShowNextImage = () =>
  console.log("Display next image and description");

// Add React state initialized with yogaPosesData.

// Add event handler
// The state variable should be a number that gets incremented
// If state is greater than 2, reset state to 0

export default function About() {
  return (
    <section>
      <div>
        <h1>Yoga Poses</h1>
        <p>View random yoga poses with the click of a button.</p>
      </div>

      <div>
        <img src="#" />
      </div>

      <div>
        <p>Text goes here</p>
        <button type="button" onClick={handleShowNextImage}>
          Next
        </button>
      </div>
    </section>
  );
}
