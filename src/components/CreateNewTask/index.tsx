import Title from "../Title";
import * as C from "./styles";
import { ReactComponent as AddIcon } from "../../assets/icon-add.svg";
import { SyntheticEvent, useContext, useState } from "react";
import { AppContext } from "../../AppContext";

const CreateNewTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const { handleAddTask } = useContext(AppContext);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (inputValue.length) {
      handleAddTask(inputValue);
      setInputValue("");
    } else setError(true);
  };

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (error) setError(false);
    setInputValue(target.value);
  };

  return (
    <C.Container>
      <Title iconName="pencil" text="Criar nova tarefa" />

      <form onSubmit={handleSubmit}>
        <C.InputContainer>
          <C.InputText
            type="text"
            placeholder="Nome da tarefa"
            value={inputValue}
            onChange={handleChange}
            error={error}
          />
          <C.AddButton error={error}>
            <AddIcon />
          </C.AddButton>
        </C.InputContainer>
      </form>
    </C.Container>
  );
};

export default CreateNewTask;
