import { useState } from 'react';
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

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
