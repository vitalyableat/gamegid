import React, { ChangeEvent, FC, useState } from 'react';
import { Container, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { closeIconSX, inputSX, searchIconSX, containerSX } from './Search.styles';

const Search: FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearInput = () => setSearch('');

  return (
    <Container sx={containerSX}>
      <SearchIcon sx={searchIconSX} />
      <Input value={search} onChange={handleChange} sx={inputSX} />
      {search && <CloseIcon sx={closeIconSX} onClick={clearInput} />}
    </Container>
  );
};

export default Search;