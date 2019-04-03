import React from "react";
import useInputValue from "./Hooks/useInputValue";


export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input {...text} />
    </form>
  );
};
