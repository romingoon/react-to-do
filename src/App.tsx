import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 역사 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    { id: 3, text: '일정관리 앱  만들어보기', checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text: string) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
