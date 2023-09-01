import { FC } from "react"

import s from './SimpleBtn.module.scss'

interface SimpleBtnProps {
    text: string
}

const SimpleBtn: FC<SimpleBtnProps> = ({ text }) => {
    return (
        <button className={s.btn}>{text}</button>
    )
}

export default SimpleBtn