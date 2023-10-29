import React from 'react'
import { FcSearch } from 'react-icons/fc';
import { Header, Form, Button, Input } from './Searchbar.styles';

const SearchBar = ({ onSubmit }) => (
  <Header>
    <Form
      onSubmit={onSubmit}>
      <Button>
        <span>
          <FcSearch size='23' />
        </span>
      </Button>

      <Input
        type='text'
        name='search'
        autoComplete='off'
        autoFocus
        placeholder='Enter a search query'
      />
    </Form>
  </Header>
);


export default SearchBar
