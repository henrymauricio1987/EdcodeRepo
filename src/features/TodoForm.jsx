import { useState, useCallback } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        if (!title.trim()) {
            setError('Todo title cannot be empty');
            return;
        }

        if (title.length > 100) {
            setError('Todo title must be less than 100 characters');
            return;
        }

        onAddTodo(title.trim());
        setTitle('');
        setError('');
    }, [title, onAddTodo]);

    const handleChange = useCallback((event) => {
        setTitle(event.target.value);
        if (error) setError('');
    }, [error]);

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <div className="form-group">
                <label htmlFor="todoTitle">New Todo</label>
                <input
                    type="text"
                    id="todoTitle"
                    value={title}
                    onChange={handleChange}
                    placeholder="Enter a new todo..."
                    maxLength="100"
                />
                {error && <span className="error">{error}</span>}
            </div>
            <button type="submit" disabled={!title.trim()}>Add Todo</button>
        </form>
    );
};

export default TodoForm;
