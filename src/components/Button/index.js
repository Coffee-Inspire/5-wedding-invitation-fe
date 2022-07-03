import React from 'react'
import {Button as BS} from 'react-bootstrap'
import './index.scss'

function Button({props, className, children}) {
    return (
        <BS
            type="submit"
            variant='none'
            onClick={()=>{}}
            className={`${className} `+ 
            `cst-btn`
            }
        >
            <span className='cst-btn-text'>
                {children}
            </span>
        </BS>
    )
}

export default Button