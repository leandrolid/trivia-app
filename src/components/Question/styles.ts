import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  width: 100%;
`;

export const Question = styled.div`
  color: var(--background);
  text-align: left;
  margin-bottom: 2rem;

  h3,
  h4 {
    margin-bottom: 1rem;
  }

  li {
    padding: 1rem;
    background-color: var(--title);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    span:last-child {
      margin-left: 0.5rem;
    }
  }

  p {
    background: var(--background);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .correct {
    color: var(--green);
    font-weight: 700;
  }
`;

export const SelectedQuestion = styled.div``;
