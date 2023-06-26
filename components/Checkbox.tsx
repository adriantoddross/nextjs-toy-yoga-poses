import { useState } from "react";

export default function Checkbox({ id, title, onCheckboxSelected, checked }) {
  const handleOnChange = (e) => {
    onCheckboxSelected({ title, id, checked: !checked });
  };

  return (
    <div
      key={title}
      className="flex gap-x-1 rounded-md p-2 text-sm leading-6 font-semibold items-center"
    >
      <input
        type="checkbox"
        id={title}
        name={title}
        onChange={handleOnChange}
        checked={checked}
        className="h-4 w-4 rounded border-gray-300 text-gray-500 focus:ring-indigo-600"
      />
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={title} className="capitalize text-white">
          {title}
        </label>
      </div>
    </div>
  );
}
