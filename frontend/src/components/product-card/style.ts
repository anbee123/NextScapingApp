import styled from 'styled-components'
import Link from 'next/link';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 24rem;
  }
`

export const ImageContainer = styled(Link)`
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #D1D5DB;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
`

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 18rem;
  border-radius: 0.5rem;
`

export const TextTitle = styled(Link)`
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  text-decoration: none;
  color: #4B5563;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 2rem;
`

export const TextPrice = styled.h5`
  font-size: 1.2rem;
  line-height: 2rem;
  color: #4B5563;
`
