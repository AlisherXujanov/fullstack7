import "./style.scss"
import HeadingVector from "../../../assets/icons/headingVector.png"

function Heading(props) {
    const fontSize = {
        fontSize: `calc(48px / ${props.size})`,
        color: props.color ? props.color : "",
        filter: props.color ? "grayscale(100%)" : "",
    }

    const SMALL_SCREEN_SIZE = 680
    if (window.innerWidth < SMALL_SCREEN_SIZE) {
        fontSize.fontSize = `calc(38px / ${props.size})`
    }

    return (
        <div className="heading-wrapper">
            <b style={fontSize}>
                <img 
                    src={HeadingVector} 
                    alt="Vector"
                    width={`calc(50px / ${props.size})`}
                />
                {props.children}
            </b>
        </div>
    );
}

export default Heading;