import {ReactNode} from 'react'
import './triple.css'

interface Props {
    children:ReactNode
}

function Triple(props: Props) {
    const {children} = props

    return (
        <>
        <div className="triple-deco-container container">
        <div className="triple-deco-content">{children}</div>
        <div className="triple-deco-tall"></div>
        <div className="triple-deco-mid"></div>
        <div className="triple-deco-wide"></div>
      </div>
      </> 
    )
}

export default Triple
