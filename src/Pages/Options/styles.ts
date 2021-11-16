import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  gap: 1rem;
`;

export const Button = styled.button`
  background: white;
  color: var(--white);
  padding: 1rem 2rem;
  font-weight: 700;
  font-size: 1.5rem;
  width: 20rem;
  border-radius: 5px;

  &:first-child {
    background: var(--green);
  }

  &:last-child {
    background: var(--red);
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
