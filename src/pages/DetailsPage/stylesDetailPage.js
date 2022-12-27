import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to top, blue, #2a83c7);
  height: 100vh;

  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  background: #1f91e8;

  margin-top: 30px;
  border-radius: 10px;
  padding: 50px 50px 80px 50px;

  h1 {
    text-align: center;
    margin-bottom: 60px;
  }

  p {
    font-weight: bold;
  }
`;
