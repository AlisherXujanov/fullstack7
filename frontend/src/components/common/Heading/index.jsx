import "./style.scss"
import HeadingVector from "../../../assets/icons/headingVector.png"

function Heading(props) {
    const fontSize = {
        fontSize: `calc(48px / ${props.size})`,
    }
    return (
        <div className="heading-wrapper">
            <h2 style={fontSize}>
                <img 
                    src={HeadingVector} 
                    alt="Vector"
                    width={`calc(50px / ${props.size})`}
                />
                {props.children}
            </h2>
        </div>
    );
}

export default Heading;