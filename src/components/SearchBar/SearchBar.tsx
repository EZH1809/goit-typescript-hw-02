import React from 'react';
import { Formik, Form, Field, FieldAttributes } from 'formik';
import { CiSearch } from 'react-icons/ci';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Please enter your request');
            return;
          }

          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field name="query">
            {({ field }: { field: FieldAttributes<any> }) => (
              <input
                {...field}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={css.input}
              />
            )}
          </Field>
          <button type="submit" className={css.button}>
            <CiSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
