import '../styles/TodoTemplate.scss';

const TodoTemplate = ({ children }: any) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'> 할 일 관리</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;
