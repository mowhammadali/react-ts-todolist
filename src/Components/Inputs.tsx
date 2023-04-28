import React from 'react'
// styles
import styles from '../Styles/Inputs.module.css';
// icons
import { HiPlus } from 'react-icons/hi';
// interfaces
import { InputPropsType } from '../Interface/Types';

const Inputs: React.FC <InputPropsType> = props => {
    // destructuring props
    const { todoText , todoTextHandler , addTodoHandler , keyDonwHandler } = props.data;
    
    return (
        <div className = {styles.inputsContainer}>
            <input className = {styles.textTodo} type = "text" value = {todoText}
            onChange = {todoTextHandler} onKeyDown = {keyDonwHandler} placeholder = 'Today Tasks ...'/>
            <button className = {styles.addTodo} type = 'button' onClick = {addTodoHandler}>
                <HiPlus />
            </button>
        </div>
    )
}

export default Inputs;