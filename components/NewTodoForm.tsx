import { newTodo } from "@/utils/action";

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" className="border border-black" type="text" />
        <button type="submit">new Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
