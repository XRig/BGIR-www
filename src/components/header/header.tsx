import './header.css'
import DecoFrame from '../artDecoBox/decoFrame'
interface Props {
    title: string
    subtitle?: string
}

function Header(props: Props) {
    const { title, subtitle } = props

    return (
        <div className="header">
            <DecoFrame>

            <div className="header-title-box">
                <div className="title"> {title}</div>
                <div className="header-line"></div>
                <div className="subtitle">{subtitle}</div>
            </div>
            </DecoFrame>
        </div>
        
    )
}

export default Header
