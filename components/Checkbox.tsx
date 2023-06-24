import { useState } from "react";

export default function Checkbox({ id, title, onCheckboxSelected, checked }) {
  const handleOnChange = (e) => {
    onCheckboxSelected({ title, id, checked: !checked });
  };

  return (
    <div
      key={title}
      className="flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
    >
      <input
        type="checkbox"
        id={title}
        name={title}
        onChange={handleOnChange}
        checked={checked}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
