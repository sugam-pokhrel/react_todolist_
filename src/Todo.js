
import List from './RenderTodo'

const Todo = ({text}) => {
  return (
    text.map(todo=>{
        return <List key={todo.id} todo={todo} />
        
    })
  )
}

export default Todo