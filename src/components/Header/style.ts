import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
  /* height: 8rem; */
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.2rem 1rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 1px solid var(--blue-light);

    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: all 0.2s;

    &:hover {
      filter: brightness(0.9);
      border: 1px solid #FFF;
    }
  }
`