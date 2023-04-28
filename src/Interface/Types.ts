import React from "react"

export interface InputPropsType {
    data: {
        todoText: string,
        todoTextHandler: (e : React.FormEvent <HTMLInputElement>) => void,
        addTodoHandler: () => void,
        keyDonwHandler: (e: React.KeyboardEvent <HTMLInputElement>) => void,
    }
}

export interface TodosType {
    text: string;
    id: number;
    time: string;
}

export interface TodosPropsType {
    data: {
        todos: {text: string , id: number , time: string}[],
        deleteTodoHandler: (id: number) => void,
    }
}