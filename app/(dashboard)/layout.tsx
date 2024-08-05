import NewTodoForm from "@/components/NewTodoForm";

const DasshboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NewTodoForm />
      Dasshboard Layout {children}
    </div>
  );
};

export default DasshboardLayout;
