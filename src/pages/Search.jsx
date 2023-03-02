import React from 'react'
import Input from '../components/Input'
import { MainBody } from '../components/MainBody'
import { Grid, Typography, styled } from '@mui/material'
import Button from '../components/Button';

const SearchBox = styled(Grid)(() => ({
  alignSelf: 'start'
}));

function Search() {
  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Search</Typography>
        <Input />
        <Button name="Search" />
      </SearchBox>
    </MainBody>
  )
}

export default Search