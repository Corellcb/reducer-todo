import React, { useReducer } from 'react';
import Todo from './Todo';
import { TodoReducer, initialState } from '../reducers/TodoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    console.log(state);

    return (
        <div
        
        >
            {state.map(el => (
                <Todo todo={el.todo} key={el.id} /> 
                ))}
        </div>
    )

};

export default TodoList;