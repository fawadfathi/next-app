import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const todos = await db.todo.findMany({});

  return todos;
};

const Todo = async () => {
  const todos = await getData();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
