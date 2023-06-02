// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, onDeleteItem} = props
  const {title, id} = initialTodosList

  const ondelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="container1">
      <p>{title}</p>
      <button type="button" className="button" onClick={ondelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
