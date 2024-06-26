const Button = ({ task }) => (
  <div className="mb-5 flex-1">
    <button
      className="color-accent-contrast bg-color-accent hover:bg-color-accent-hover-darker mt-5 mr-8 rounded-full border px-8 py-2 font-bold"
      onClick={async () => {
        await fetch("/api/utils", {
          body: JSON.stringify({
            task: task.task,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
      }}
      type="button"
    >
      {task.description}
    </button>
  </div>
);

export default function Utils() {
  const tasks = [
    {
      task: "generate_users",
      description: "Generate random users",
    },
    {
      task: "clean_database",
      description: "Clean the database",
    },
  ];

  return (
    <div className="mt-10 ml-20">
      <h2 className="mb-10 text-xl">Utils</h2>

      {tasks.map((task, index) => (
        <Button key={index} task={task} />
      ))}
    </div>
  );
}
