import React from "react";
import {
  TextField,
  InputAdornment,
  TextFieldVariants,
  TextFieldProps,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBar.scss";

const SearchBar = (
  props: {
    variant?: TextFieldVariants,
  } & Omit<TextFieldProps, 'variant'>
) => {
  return (
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        {...props}
      />
  );
};

export default SearchBar;