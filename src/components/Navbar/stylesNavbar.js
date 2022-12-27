import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #1d44b8;

  padding: 15px;

  div:first-child {
    margin-right: 30px;
  }

  .icon {
    cursor: pointer;
    background: blue;
    border-radius: 5px;
    color: white;

    transition: 0.3s ease;
  }

  .icon:hover {
    background: #2b58de;
  }

  button {
    background: blue;

    color: white;

    font-weight: 100;

    padding: 5px 25px;
    border-radius: 10px;
    border: none;

    cursor: pointer;

    transition: 0.3s ease;
  }

  button:hover {
    background: #2b58de;
  }
`;
