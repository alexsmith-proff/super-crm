import { FC } from "react"

import s from './TodosHeader.module.scss'
import AddBtn from "../Elements/AddBtn/AddBtn"

interface TodosHeaderProps { }

const TodosHeader: FC<TodosHeaderProps> = ({ }) => {
    return (
        <div className={s.header}>
            <span className={s.title}>Today</span>
            <div className={s.group}>
                <div className={s.addBtn}>
                    <AddBtn />
                </div>
                <div className={s.num}>2</div>
            </div>
        </div>
    )
}

export default TodosHeader