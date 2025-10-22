function TodoListItem({ todo, onToggleTodo, onDeleteTodo }) {
    return (
        <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => onToggleTodo(todo.id)}
            />
            <span>{todo.title}</span>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoListItem;
