import GlobalStyle from "./globalStyles";
import * as C from "./App.styles";
import Header from "./components/Header";
import CreateNewTask from "./components/CreateNewTask";
import TodayTasks from "./components/TodayTasks";
import Progress from "./components/Progress";
import CompletedTasks from "./components/CompletedTasks";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <C.Container>
        <Header />
        <C.Content>
          <CreateNewTask />
          <TodayTasks />
          <C.Divider />
          <Progress />
          <CompletedTasks />
        </C.Content>
      </C.Container>
    </>
  );
};

export default App;
