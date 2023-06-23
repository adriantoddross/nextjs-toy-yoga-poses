import { useState } from "react";

export default function Checkbox({ id, title, onCheckboxSelected, checked }) {
  const handleOnChange = (e) => {
    onCheckboxSelected({ title, id, checked: !checked });
  };

  return (
    <div>
      <div key={title}>
        <input
          type="checkbox"
          id={title}
          name={title}
          onChange={handleOnChange}
          checked={checked}
        />
        <label htmlFor={title}>{title}</label>
      </div>
    </div>
  );
}
