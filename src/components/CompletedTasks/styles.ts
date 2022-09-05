import styled from "styled-components";

export const Container = styled.div`
  max-width: 520px;
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 768px) {
    max-width: 100%;
    grid-column: 1;
    grid-row: 4;
  }
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
