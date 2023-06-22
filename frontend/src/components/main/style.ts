import styled, { css, CSSProp } from 'styled-components'
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 5rem auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Content = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 70%;
  }
`

export const SearchResult = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 2rem;

  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2rem;

  @media (min-width: 640px) {
    display: grid;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const TextMessage = styled.h2`
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  text-decoration: none;
  color: #4B5563;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 2rem;
  white-space: nowrap;
`