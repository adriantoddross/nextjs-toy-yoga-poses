import { useState } from "react";

export default function Checkbox({ title, onCheckboxSelected }) {
  const [isChecked, setChecked] = useState(false);

  const handleOnChange = (e) => {
    setChecked(!isChecked);
    onCheckboxSelected({ title: e.target.name, isChecked: !isChecked });
  };

  return (
    <div>
      <div key={title}>
        <input
          type="checkbox"
          id={title}
          name={title}
          onChange={handleOnChange}
          checked={isChecked}
        />
        <label htmlFor={title}>{title}</label>
      </div>
    </div>
  );
}
