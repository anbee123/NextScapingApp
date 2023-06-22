import { ChangeEvent, useState } from 'react';
import { SearchField, Container, SearchIcon, Button, IconContainer, Input } from './style';

interface SearchBoxProps {
  onSearch: (searchQuery: string) => void
  isLoading?: boolean
}

const SearchBox = ({onSearch, isLoading = false}: SearchBoxProps) => {
  const [value, onChange] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      onSearch(value)
    }
  }

  const handleAddClick = () => {
    onSearch(value);
  };

  return (<Container>
    <SearchField>
      <IconContainer>
        <SearchIcon
          priority
          src="/icons/search.svg"
          height={15}
          width={15}
          alt="Follow us on Twitter"
        />
      </IconContainer>
      <Input
        type="search"
        name="search"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />
    </SearchField>
    <Button
      onClick={handleAddClick}
      disabled={isLoading}
    >
      Search
    </Button>
  </Container>
  );
};

export default SearchBox