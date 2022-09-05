import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import Title from "../Title";
import * as C from "./styles";
import imgUrl from "../../assets/img-trophy-min.png";

const Progress = () => {
  const { progressBarValue } = useContext(AppContext);

  return (
    <C.Container>
      <Title iconName="chart" text="Progresso" />

      <C.ProgressBar>
        <C.ProgressBarFill progressBarValue={progressBarValue} />
      </C.ProgressBar>

      <C.ProgressBarValues>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </C.ProgressBarValues>

      {progressBarValue === 100 && (
        <C.TaskCompletedMessage progressBarValue={progressBarValue}>
          <img src={imgUrl} alt="Troféu" width="40" height="40" />
          <span>Parabéns! Você concluiu todas as tarefas de hoje!</span>
        </C.TaskCompletedMessage>
      )}
    </C.Container>
  );
};

export default Progress;
