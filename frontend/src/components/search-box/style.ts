import styled from 'styled-components'
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  color: #4B5563;
  justify-content: center;
`
export const SearchField = styled.div`
  display: flex; 
  position: relative; 
  align-items: center; 
  width: 100%; 
`
export const IconContainer = styled.div`
  display: flex; 
  position: absolute; 
  top: 0;
  bottom: 0; 
  padding-left: 1rem;
  padding-right: 1rem; 
  align-items: center; 
  pointer-events: none; 
`

export const SearchIcon = styled(Image)`
`;

export const Input = styled.input`
  padding-right: 1.25rem;
  padding-left: 2.5rem;
  background-color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: #D1D5DB;
  &:focus {
    outline: none;
  }
`
export const Button = styled.button`
  padding-left: 1rem;
  padding-right: 1rem; 
  margin-left: 0.5rem; 
  background-color: #374151; 
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
  transition-duration: 500ms; 
  color: #ffffff; 
  border-radius: 0.375rem; 
  border-width: 1px; 
  border-color: #374151; 
  user-select: none; 
  cursor: pointer;
  height: 2.5rem;

  &:hover {
    background-color: #1F2937;
    &:disabled {
      background-color: #737c8b;
    }
  }
  &:disabled {
    cursor: auto;
    background-color: #737c8b;
  }
`

