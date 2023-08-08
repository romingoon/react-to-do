import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className='TodoInsert'>
      <input
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
