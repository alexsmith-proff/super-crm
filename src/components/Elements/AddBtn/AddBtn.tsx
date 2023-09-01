import { FC } from "react"

import s from './AddBtn.module.scss'

interface AddBtnProps { }

const AddBtn: FC<AddBtnProps> = ({ }) => {
    return (
        <button className={s.btn}>
            <img src="img/add.svg" alt="add" />
        </button>
    )
}

export default AddBtn