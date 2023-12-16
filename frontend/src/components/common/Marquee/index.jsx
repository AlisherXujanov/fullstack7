import "./style.scss"
// import reversedStyle from "./reversed.scss"

function Marquee(props) {
    // let style = props.direction === "left" ? reversedStyle : {}
    return (
        <div>
            <div id="progress-marquee">
                <div class="progress-wrapper">
                    <div class="progress-bar">
                        <span class="dot"></span>
                    </div>
                    <div class="progress-bar">
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Marquee;