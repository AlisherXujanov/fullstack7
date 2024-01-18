import "./style.scss"


function Marquee(props) {
    let progressBar = props.reversed ? {
        float: "left",
        background: "linear-gradient(to left, #222, #ff660050, #ff6600)"
    } : {}

    let dotPosition = props.reversed ? { left: "-1px" } : {}

    return (
        <div>
            <div id="progress-marquee">
                <div className={props.reversed ? "progress-wrapper reversed" : "progress-wrapper"}>
                    <div style={progressBar} className="progress-bar">
                        <span style={dotPosition} className="dot"></span>
                    </div>
                    <div style={progressBar} className="progress-bar">
                        <span style={dotPosition} className="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marquee;