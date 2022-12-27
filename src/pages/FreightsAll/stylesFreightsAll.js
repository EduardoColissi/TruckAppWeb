import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const CardContainer = styled.div`
  background: linear-gradient(to right, #1e91e8, #2a83c7);
  width: 400px;
  border-radius: 10px;
  border: 1px solid #0f5c30;
  margin-bottom: 15px;
  text-indent: 10px;

  h2 {
    color: white;
  }

  a {
    text-decoration: none;
  }
`;

export const BtnCreate = styled.button`
  background: #1e91e8;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  cursor: pointer;

  color: white;
  font-weight: bold;
  justify-content: right;
  align-items: right;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.834);
  z-index: 1;

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
