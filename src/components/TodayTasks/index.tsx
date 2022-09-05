import { useContext } from "react";
import { AppContext } from "../../AppContext";
import TaskItem from "../TaskItem";
import Title from "../Title";
import * as C from "./styles";

const TodayTasks = () => {
  const { taskList, progressBarValue } = useContext(AppContext);

  return (
    <C.Container progressBarValue={progressBarValue}>
      <Title iconName="list" text="Tarefas de hoje" />

      {progressBarValue === 100 || taskList.length === 0 ? (
        <C.TodayTasksMessage>
          Você não tem tarefas disponíveis
        </C.TodayTasksMessage>
      ) : (
        <C.TaskList>
          {taskList.map(
            (task) => !task.done && <TaskItem key={task.id} task={task} />
          )}
        </C.TaskList>
      )}
    </C.Container>
  );
};

export default TodayTasks;
