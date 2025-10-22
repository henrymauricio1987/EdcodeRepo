import TodoListItem from "./TodoListItem";

function TodoList({ todolist, onToggleTodo, onDeleteTodo }) {
    if (todolist.length === 0) {
        return <p>No todos yet. Add one above!</p>;
    }

    return (
        <ul className="todo-list">
            {todolist.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
