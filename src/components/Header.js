import React from 'react'
import classes from './Header.module.css'

import ThemeContext from '../ThemeContext'

function Header() {
    // const cl = `${classes.header} ${props.theme==='dark'?classes.dark:null}`
    return (
        <ThemeContext.Consumer>
            {(ctx)=>(
                    <header className={`${classes.header} ${ctx.theme==='dark'?classes.dark:null}`}>
                        <button onClick={ctx.themeToggler}>{ctx.theme==='dark'? 'change to light':'change to dark'}</button>
                    </header>

                    )
            }

        </ThemeContext.Consumer>
    )
}

export default Header

