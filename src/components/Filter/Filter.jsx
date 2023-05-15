import React from 'react';
import { Label, FilterField } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onFilterChange = e => dispatch(setStatusFilter(e.currentTarget.value));

  return (
    <Label>
      Find contacts by name
      <FilterField
        value={value}
        onChange={onFilterChange}
        type="text"
        name="filter"
      />
    </Label>
  );
};
