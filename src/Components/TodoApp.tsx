import React, { useEffect, useState } from 'react'
// styles
import styles from '../Styles/TodoApp.module.css';
// components
import Inputs from './Inputs';
import Todos from './Todos';
// helper
import { createId } from '../Helper/CreateId';
import { getTime } from '../Helper/GetTime';
// interfaces
import { TodosType } from '../Interface/Types';

const TodoApp: React.FC = () => {
    // useStates
    const [todos , setTodos] = useState<TodosType[]> (
        JSON.parse(localStorage.getItem('todos') || '[]')
    );
    const [todoText , setTodoText] = useState<string> ('');

    // useEffects
    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify(todos));
    } , [todos])

    // changes Handler
    const todoTextHandler = (event: React.FormEvent <HTMLInputElement>) => {
        setTodoText(event.currentTarget.value);
    }

    // clicks Handler
    const addTodoHandler = () => {
        if (todoText) {
            setTodos([...todos , {text: todoText , id: createId(todos) , time: getTime()}]);
            setTodoText('');
        }
    }

    const deleteTodoHandler = (id: number) => {
        const newItems = todos.filter(todo => todo.id !== id);
        setTodos([...newItems]);
    }

    // keyDown Handler
    const keyDonwHandler = (event: React.KeyboardEvent <HTMLInputElement>) => {
        if (event.key === 'Enter' && todoText) {
            setTodos([...todos , {text: todoText , id: createId(todos) , time: getTime()}]);
            setTodoText('');
        }
    }

    return (
        <div id = {styles.todoAppContainer}>
            <Inputs data = {{todoText , todoTextHandler , addTodoHandler , keyDonwHandler}}/>
            <Todos data = {{todos , deleteTodoHandler}}/>
        </div>
    )
}

export default TodoApp;