import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  max-width: 480px;
  margin: 0 auto;
  min-height: 100vh;
  gap: 1rem;

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button {
    font-size: 2rem;
    border-radius: 50%;
    margin: 0 1rem;
    width: 3rem;
    height: 3rem;
    background: var(--green);

    &:hover {
      background: var(--green);
      filter: brightness(0.7);
    }
  }

  a {
    align-self: flex-end;
    text-decoration: none;
    color: var(--text);
    font-size: 0.75rem;
    font-weight: 300;
  }
`;
