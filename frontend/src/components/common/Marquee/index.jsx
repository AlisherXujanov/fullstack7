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
                <div class={props.reversed ? "progress-wrapper reversed" : "progress-wrapper"}>
                    <div style={progressBar} class="progress-bar">
                        <span style={dotPosition} class="dot"></span>
                    </div>
                    <div style={progressBar} class="progress-bar">
                        <span style={dotPosition} class="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marquee;