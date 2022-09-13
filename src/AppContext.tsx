import { createContext, ReactNode, useEffect, useState } from "react";
import Task from "./types/Task";

type Context = {
  taskList: Task[];
  setTaskList: (taskList: Task[]) => void;
  progressBarValue: number;
  handleTaskDelete: (id: number) => void;
  handleAddTask: (taskName: string) => void;
  handleTaskChange: (id: number, done: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const AppContext = createContext<Context>(null);

export const AppStorage = ({ children }: Props) => {
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const data = localStorage.getItem("taskList");
    return data ? JSON.parse(data) : [];
  });
  const [progressBarValue, setProgressBarValue] = useState(0);

  const handleTaskDelete = (id: number) => {
    const newTaskList = taskList
      .filter((task) => task.id !== id)
      .map((task, index) => {
        task.id = index + 1;
        return task;
      });
    setTaskList(newTaskList);
  };

  const handleAddTask = (taskName: string) => {
    const newTaskList = [...taskList];
    newTaskList.push({
      id: taskList.length + 1,
      name: taskName,
      done: false,
    });
    setTaskList(newTaskList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    const newTaskList = [...taskList];
    newTaskList.forEach((task) => {
      if (task.id === id) {
        task.done = done;
      }
    });
    setTaskList(newTaskList);
  };

  useEffect(() => {
    const handleProgressChange = () => {
      if (taskList.length) {
        const completedTasks = taskList.filter((task) => task.done);
        const progressBarValue = Number(
          ((completedTasks.length * 100) / taskList.length).toFixed()
        );
        setProgressBarValue(progressBarValue);
      } else setProgressBarValue(0);
    };

    handleProgressChange();
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <AppContext.Provider
      value={{
        taskList,
        setTaskList,
        progressBarValue,
        handleTaskDelete,
        handleAddTask,
        handleTaskChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
