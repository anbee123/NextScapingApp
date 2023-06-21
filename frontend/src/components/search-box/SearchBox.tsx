import { ChangeEvent, useState } from 'react';
import { SearchField, Container, SearchIcon, Button, IconContainer, Input } from './style';

interface SearchBoxProps {
  onSearch: (searchQuery: string) => void
}

const SearchBox = ({onSearch}: SearchBoxProps) => {
  const [value, onChange] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

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
        placeholder="Search"
      />
    </SearchField>
    <Button
      onClick={handleAddClick}
    >
      Search
    </Button>
  </Container>
  );
};

export default SearchBox