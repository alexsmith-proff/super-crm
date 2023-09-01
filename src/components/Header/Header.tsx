import { FC } from "react"

import s from './Header.module.scss'

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header>
            <div className="container">
                <div className={s.headerContainer}>
                    <img src="img/logo.png" alt="logo" />
                </div>
            </div>
        </header>
    )
}

export default Header