

const RenderTodo = ({todo}) => {
  return (
    
    <div>
        
        <br />

        <label>
        <input type="checkbox" checked={todo.iscompleted} />
        {todo.name}
      </label>
        
        
        </div>
  )
}

export default RenderTodo