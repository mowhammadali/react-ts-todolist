import { TodosType } from "../Interface/Types";

export const createId = (todos: TodosType[]) => {
    const ids = todos.map((todo: TodosType) => {
        return todo.id;
    })
    return ids.length ? Math.max(...ids) + 1 : 1; 
}