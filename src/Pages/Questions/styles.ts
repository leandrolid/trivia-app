import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  max-width: 480px;
  margin: auto;
  gap: 1rem;
  padding: 0 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 100%;

  span {
    position: absolute;
    font-size: 3rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    transform: translateX(-50%);
    padding: 1rem;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background: var(--blue-dark);
    color: var(--white);
  }

  p {
    padding: 1rem 1rem 1rem 4rem;
    background: var(--white);
    color: var(--background);
    font-weight: 500;
    border-radius: 7px;
    min-width: 100%;
  }
`;

export const Main = styled.main`
  width: 72%;
  margin: 1rem auto;
  /* max-width: 400px; */

  label {
    padding: 1rem;
    background-color: var(--white);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;

    /* &::before {
      content: '';
      width: 12px;
      height: 12px;
      display: block;
      background-color: var(--gray-50);
      border: 1px solid #ddd;
      margin-right: 0.5rem;
    } */

    &:hover {
      filter: brightness(0.9);
    }

    input {
      margin: 0 0.5rem;
      display: none;
    }

    span {
      margin: auto;
    }
  }
`;
