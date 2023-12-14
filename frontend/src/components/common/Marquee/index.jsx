import "./style.scss"

function Marquee() {
    return (
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
    );
}

export default Marquee;