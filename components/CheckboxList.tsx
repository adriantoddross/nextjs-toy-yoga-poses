export default function CheckboxList({ exercises }) {
  // { exercises, onExerciseSelected }

  const onExerciseSelected = (e) =>
    console.log(`${e.target.name} checkbox clicked`);

  return (
    <fieldset>
      <div>
        <legend>By exercise:</legend>
        <button type="button">Reset</button>
      </div>

      <div>
        {exercises?.map((title) => {
          return (
            <div key={title}>
              <input
                type="checkbox"
                id={title}
                name={title}
                onChange={onExerciseSelected}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
