import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .date-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    background: rgba(0, 0, 0, 0.05);
    padding: 5px 10px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
  }

  nav ul {
    display: flex;
    list-style: none;
    gap: 15px;
  }

  li {
    display: inline;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }

  img {
    height: 40px;
  }

  /* Animação CSS */
  .fade-in {
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
