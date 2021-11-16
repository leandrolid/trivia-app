import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  p {
    color: var(--white);
    margin: 1rem 0;
  }

  a {
    background: var(--text-highlight);
    color: var(--blue-dark);
    padding: 0.25rem 0.5rem;
    border-radius: 2px;
    text-decoration: none;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
