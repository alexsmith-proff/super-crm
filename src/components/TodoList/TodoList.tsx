import { FC, useEffect, useState } from "react"
import axios from "axios"
import Todo from "../Todo/Todo"
import { ITodo } from "../../interfaces/todo.interface"


import s from './TodoList.module.scss'
import TodosHeader from "../TodosHeader/TodosHeader"

interface TodoListProps { }

const TodoList: FC<TodoListProps> = ({ }) => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(resp => setTodos(resp.data))
    }, [])
    return (
        <div className={s.list}>
            <TodosHeader />
            <ul className={s.list}>
                {
                    todos.map(item => <Todo todo={item} key={item.id} />)
                }

            </ul>
        </div>
    )
}

export default TodoList