import { FC } from "react"
import { ITodo } from "../../interfaces/todo.interface"

import s from './Todo.module.scss'
import SimpleBtn from "../Elements/SimpleBtn/SimpleBtn"
import ArrowBtn from "../Elements/ArrowBtn/ArrowBtn"

interface TodoProps {
    todo: ITodo
}

const Todo: FC<TodoProps> = ({ todo }) => {
    console.log(todo);

    return (
        <li className={s.item}>
            <div className={s.card}>
                <input type="chexbox" />
                <span className={s.title}>For the sacke of example we are a building company and we have just closed</span>
                <div className={s.dataGroup}>
                    <p className={s.data}></p>
                    <p className={s.data}></p>
                </div>
                <p className={s.desc}>Task description with long long long te</p>
                <div className={s.btnGroup}>
                    <div className={s.simpleBtn}>
                        <SimpleBtn text="Entity title" />
                    </div>
                    <div className={s.arrowBtn}>
                        <ArrowBtn text="Front-end" />
                    </div>
                </div>

            </div>
        </li>
    )
}

export default Todo