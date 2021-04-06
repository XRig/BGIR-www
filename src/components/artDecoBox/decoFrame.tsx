import './decoFrame.css'
import { ReactNode } from 'react'
interface Props { children: ReactNode }

function DecoFrame(props: Props) {
  const { children } = props

  return (
    <>
      <div className="corners-deco-container container">
        <div className="content">{children}</div>
        <div className="square-left-top"></div>
        <div className="square-left-bottom"></div>
        <div className="square-right-top"></div>
        <div className="square-right-bottom"></div>
        <div className="vertical-edge-left"></div>
        <div className="vertical-edge-right"></div>
        <div className="horizontal-edge-left"></div>
        <div className="horizontal-edge-right"></div>
        <div className="left-outer"></div>
        <div className="right-outer"></div>
        <div className="top-outer"></div>
        <div className="bottom-outer"></div>
        <div className="left-inner"></div>
        <div className="right-inner"></div>
        <div className="top-inner"></div>
        <div className="bottom-inner"></div>
      </div>
    </>
  )
}

export default DecoFrame
