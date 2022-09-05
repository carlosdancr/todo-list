import styled from "styled-components";

type Props = {
  progressBarValue: number;
};

export const Container = styled.div<Props>`
  max-width: 520px;
  grid-column: 1;
  grid-row: 2;
  margin-top: ${(props) => (props.progressBarValue === 100 ? "-92px" : "0")};

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: #24293f;
      margin: 24px 0;
    }
  }
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TodayTasksMessage = styled.span`
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #fff;

  display: flex;
  justify-content: center;
`;
