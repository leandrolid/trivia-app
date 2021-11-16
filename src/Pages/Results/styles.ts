import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
  margin: 5rem auto;
  width: 100%;
  max-width: 720px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* min-height: 100vh; */
  background: var(--white);
  border-radius: 10px;
`;

export const Header = styled.header`
  background: var(--blue);
  color: var(--white);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 100%;
  padding: 1rem 2rem 5rem;
  position: relative;

  p {
    margin: 1rem 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 4rem;
  background-image: url('/cloud.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 50vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.button`
  background: var(--blue);
  color: var(--white);
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  &:hover {
    filter: brightness(0.9);
  }
`;
