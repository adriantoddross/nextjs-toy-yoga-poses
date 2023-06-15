import Link from "next/link";

export default function Sidebar({ exercises, onExerciseSelected }) {
    // onExerciseSelected helper function to filter & display YogaPosesCards
  return (
    <div>
      <div>
        <Logo />
        <div>Login Logout Profile</div>
      </div>
      <div>
        {/* use divs for this since we're just changing UI */}
        <div>
          <p>Filters</p>
          <button>Reset</button>
        </div>
        <div>
          <div>By exercise:</div>
          <input type="checkbox" name="" id="" onChange={()} />
          {/* map statement to render all excercises */}
        </div>
        <div></div>
      </div>
    </div>
  );
}
