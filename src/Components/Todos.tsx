import React from 'react'
// styles
import styles from '../Styles/Todos.module.css';
// icons
import { FaTrash } from 'react-icons/fa';
// interfaces
import { TodosPropsType } from '../Interface/Types';

const Todos: React.FC <TodosPropsType> = props => {
    // destructuring props
    const { todos , deleteTodoHandler} = props.data;

    return (
        <div className = {styles.todosContainer}>
            {
                todos.map(todo => {
                    return (
                        <div className = {styles.todoContainer} key = {todo.id}>
                            <div className = {styles.textContainer}>
                                <h2 className = {styles.todoText}>{todo.text}</h2>
                                <h4 className = {styles.todoTime}>{todo.time}</h4>
                            </div>
                            <button className = {styles.todoButton} onClick = {() => deleteTodoHandler(todo.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todos;