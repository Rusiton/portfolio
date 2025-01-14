import '../css/swiper.css';

function Swiper(){
    return(
        <div className="swiper-container">
            <div className="swiper">
                <div className="swiper">
                    <div className="left-wave" style={{height: "100%", width: "25%", overflow: "hidden"}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z" style={{stroke: "none", fill: "var(--color-1)"}}></path></svg></div>
                    <div className="middle-box"></div>
                    <div className="right-wave" style={{height: "100%", width: "25%", overflow: "hidden"}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M213.19,0.00 C152.69,70.06 270.03,70.06 202.98,150.00 L500.00,150.00 L500.00,0.00 Z" style={{stroke: "none", fill: "var(--color-1)"}}></path></svg></div>
                </div>
            </div>
        </div>
    );
}

export default Swiper;