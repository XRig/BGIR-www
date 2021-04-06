import './nav.css'

interface Props {}

function Nav(props: Props) {
    const {} = props

    return (
        <>
        <div className="triple-deco-container container">
        <div className="triple-deco-content">Triple</div>
        <div className="triple-deco-tall"></div>
        <div className="triple-deco-mid"></div>
        <div className="triple-deco-wide"></div>
      </div>
      
      <div className="stair-deco-container container">
        <div className="stair-deco-content">Stairstep</div>
        <div className="stair-deco-outer-left"></div>
        <div className="stair-deco-outer-right"></div>
        <div className="stair-deco-mid-left"></div>
        <div className="stair-deco-mid-right"></div>
        <div className="stair-deco-mid-top"></div>
        <div className="stair-deco-mid-bottom"></div>
        <div className="stair-deco-inner-top"></div>
        <div className="stair-deco-inner-bottom"></div>
      </div>
      
      <div className="square-deco-container container">
        <div className="square-deco-content">Square</div>
        <div className="square-deco-inner"></div>
        <div className="square-deco-square-left-top"></div>
        <div className="square-deco-square-left-bottom"></div>
        <div className="square-deco-square-right-top"></div>
        <div className="square-deco-square-right-bottom"></div>
        <div className="square-deco-tall"></div>
        <div className="square-deco-wide"></div>
      </div>
      
      <div className="diamond-deco-container container">
        <div className="diamond-deco-content">Diamond</div>
        <div className="diamond-deco-square-left-top"></div>
        <div className="diamond-deco-square-left-bottom"></div>
        <div className="diamond-deco-square-right-top"></div>
        <div className="diamond-deco-square-right-bottom"></div>
        <div className="diamond-deco-tall-outer"></div>
        <div className="diamond-deco-tall-inner"></div>
        <div className="diamond-deco-wide-outer"></div>
        <div className="diamond-deco-wide-inner"></div>
      </div>
      
      <p>Triple Diamond Divider</p>
      <div className="triple-diamond-deco-container container">
        <div className="left-line"></div>
        <div className="right-line"></div>
        <div className="small-diamond-left"></div>
        <div className="small-diamond-right"></div>
        <div className="large-diamond"></div>
      </div>
      
      <div className="corners-deco-container container">
        <div className="content">Corners</div>
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
      
      <div className="title-deco-container container">
        <div className="content content-default">Title</div>
        <div className="content-dot"></div>
        <div className="main-diamond-outer"></div>
        <div className="main-diamond-inner"></div>
        <div className="mid-diamond-left"></div>
        <div className="mid-diamond-right"></div>
        <div className="small-diamond-left-top"></div>
        <div className="small-diamond-left-bottom"></div>
        <div className="small-diamond-right-top"></div>
        <div className="small-diamond-right-bottom"></div>
      </div>
      </>
    )
}

export default Nav
