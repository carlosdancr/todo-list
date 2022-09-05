import styled, { keyframes } from "styled-components";
import checkedIcon from "../../assets/icon-checked.svg";

type Props = {
  done: boolean;
};

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: initial;
    transform: initial;
  }
`;

export const Container = styled.li<Props>`
  max-width: 520px;
  height: 56px;
  background: ${({ done }) => (done ? "rgba(47, 90, 255, 0.25)" : "#151a37")};
  border: 1px solid ${({ done }) => (done ? "#2F5AFF" : "#24293F")};
  border-radius: 8px;
  padding: 0 16px;
  position: relative;
  animation: ${fadeInDown} 0.8s;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const InputCheckbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.div<Props>`
  width: 32px;
  height: 32px;
  background: #060b28;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover::after {
    content: "";
    display: ${({ done }) => (done ? "none" : "block")};
    width: 16px;
    height: 16px;
    background: url(${checkedIcon});
  }
`;

export const CustomCheckboxChecked = styled.div`
  width: 24px;
  height: 24px;
  background: #2f5aff;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaskName = styled.span`
  flex: 1;
  margin-left: 12px;

  font-family: "Roboto";
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #fff;
`;

export const TrashButton = styled.button`
  height: 100%;
  background: none;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    transition: 0.2s;
  }

  &:hover,
  &:focus {
    svg path {
      fill: #ff334c;
    }
  }
`;
