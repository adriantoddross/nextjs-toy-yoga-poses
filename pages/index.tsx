import Link from "next/link";

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
        <button type="button" onClick={() => console.log("Button clicked!")}>
          Next
        </button>
      </div>
    </section>
  );
}
