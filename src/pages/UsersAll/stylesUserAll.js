import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  background: linear-gradient(to right, #1e91e8, #2a83c7);
  width: 400px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid #0f5c30;
  margin-bottom: 15px;
  text-indent: 10px;
  cursor: pointer;

  h2 {
    color: white;
  }

  a {
    text-decoration: none;
  }
`;
