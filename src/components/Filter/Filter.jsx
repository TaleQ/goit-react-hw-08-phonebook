import { nanoid } from 'nanoid';
import { FilterDiv, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from 'redux/contacts/filterSlice';
import { contactsSelectors } from 'redux/contacts/selectors';

export const Filter = () => {
  const filterValue = useSelector(contactsSelectors.selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(toggleFilter(value));
  };

  const filterInputId = nanoid();
  return (
    <FilterDiv>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <FilterInput
        type="text"
        id={filterInputId}
        onChange={handleChange}
        value={filterValue}
      ></FilterInput>
    </FilterDiv>
  );
};
