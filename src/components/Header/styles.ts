import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid #151a37;
`;

export const Container = styled.div`
  max-width: 1248px;
  padding: 20px 16px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  color: #fff;
`;

export const SocialMediaList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Link = styled.a.attrs({ target: "_blank" })`
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%);
  border: 1px solid #24293f;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
