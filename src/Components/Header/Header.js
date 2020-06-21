import React from 'react'
import './Header.scss'

export const Header = () => {
    return (
        <header className = "header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <span className="header__logo">
                            Logo
                        </span>
                    </div>
                    <div className="header__right">
                        <a href="#" className="header__login">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
} 