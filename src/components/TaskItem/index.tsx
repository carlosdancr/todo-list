import * as C from "./styles";
import { ReactComponent as TrashIcon } from "../../assets/icon-trash.svg";
import { ReactComponent as CheckedIcon } from "../../assets/icon-checked.svg";
import Task from "../../types/Task";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const { handleTaskChange, handleTaskDelete } = useContext(AppContext);

  return (
    <C.Container done={task.done}>
      <label>
        <C.InputCheckbox
          type="checkbox"
          checked={task.done}
          onChange={(e) => handleTaskChange(task.id, e.target.checked)}
        />
        <C.CustomCheckbox done={task.done}>
          {task.done && (
            <C.CustomCheckboxChecked>
              <CheckedIcon />
            </C.CustomCheckboxChecked>
          )}
        </C.CustomCheckbox>
      </label>

      <C.TaskName>{task.name}</C.TaskName>

      <C.TrashButton onClick={() => handleTaskDelete(task.id)}>
        <TrashIcon />
      </C.TrashButton>
    </C.Container>
  );
};

export default TaskItem;
