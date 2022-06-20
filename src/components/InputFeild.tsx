import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input_box"
        type="input"
        placeholder="Enter a task"
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
