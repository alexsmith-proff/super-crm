import { FC } from "react"

import s from './Content.module.scss'
import TodoList from "../TodoList/TodoList"

interface ContentProps { }

const Content: FC<ContentProps> = ({ }) => {
    return (
        <section className={s.content}>
            <div className="container">
                <div className={s.list}>
                    <TodoList />
                </div>
            </div>
        </section>
    )
}

export default Content