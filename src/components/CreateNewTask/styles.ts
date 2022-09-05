import styled from "styled-components";

type Props = {
  error: boolean;
};

export const Container = styled.div`
  max-width: 520px;
  grid-column: 1;
  grid-row: 1;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #24293f;
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputText = styled.input<Props>`
  flex: 1;
  height: 56px;
  background: ${({ error }) => (error ? "rgba(255, 54, 78, 0.25)" : "#151a37")};
  border: 1px solid ${({ error }) => (error ? "#FF364E" : "#24293f")};
  border-right: none;
  border-radius: 8px 0 0 8px;
  padding: 0 16px;
  outline: none;
  transition: 0.2s;

  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:hover,
  &:focus {
    border-color: ${({ error }) => (error ? "#FF364E" : "#7a38fe")};
  }
`;

export const AddButton = styled.button<Props>`
  width: 56px;
  height: 56px;
  background: ${({ error }) => (error ? "#FF364E" : "#7a38fe")};
  border-radius: 0 8px 8px 0;
  transition: 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
`;
