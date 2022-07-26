const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  )
}

//취향에 따라 위의 TodoItem 컴포넌트를 파일 단위를 구분해줘도 됨
const Todos = ({
  input, //인풋에 입력되는 텍스트
  todos, //할일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = e => {
    e.preventDefault()
  }

return (
  <div>
    <form onSubmit={onSubmit}>
      <input />
      <button type="submit">등록</button>
    </form>
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  </div>
)
}
export default Todos;