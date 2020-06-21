import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
    return (
        <aside className="navbar block">
            <div className="navbar__inner">
                <div className="navbar__element">
                    <NavLink to={'/profile'} className="navbar__element-link">Профиль</NavLink>
                </div>
                <div className="navbar__element">
                    <NavLink to={'/users'} className="navbar__element-link">Люди</NavLink>
                </div>
            </div>
        </aside>
    )
}