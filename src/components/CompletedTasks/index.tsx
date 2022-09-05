import { useContext } from "react";
import { AppContext } from "../../AppContext";
import TaskItem from "../TaskItem";
import Title from "../Title";
import * as C from "./styles";

const CompletedTasks = () => {
  const { taskList } = useContext(AppContext);

  return (
    <C.Container>
      <Title iconName="completed" text="Tarefas concluídas" />

      <C.TaskList>
        {taskList.map(
          (task) => task.done && <TaskItem key={task.id} task={task} />
        )}
      </C.TaskList>
    </C.Container>
  );
};

export default CompletedTasks;
