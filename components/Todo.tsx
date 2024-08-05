"use client";

import { useTransition } from "react";
import { completeTodo } from "@/utils/action";

interface TodoProps {
  todo: {
    content: string;
    id: string;
    completed: boolean;
  };
}

const Todo = ({ todo }: TodoProps) => {
  const [pendding, startTransation] = useTransition();

  return (
    <div
      className={`border border-black cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={() => startTransation(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
