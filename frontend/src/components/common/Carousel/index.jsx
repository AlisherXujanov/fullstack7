import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    const imgStyle = {
        filter: props.blurred ? "grayscale(100%) brightness(0.5)" : "none"
    }
    const indicatorsAsNumbers = (onClickHandler, isSelected, index, label) => {
        const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
        const style = isSelected
            ? { ...defStyle, color: "red" }
            : { ...defStyle };
        return (
            <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
            >
                {index + 1}
            </span>
        );
    }

    return (
        <section className="carousel-section">
            <div className="carousel-c-children">
                {props.children}
            </div>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}
                renderIndicator={props.indicatorsAsNumbers ? indicatorsAsNumbers : undefined}
            >
                {
                    props.images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img
                                    style={imgStyle}
                                    src={img}
                                    alt={"Carousel-item-" + index}
                                    width={"100%"}
                                    height="650"
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </section>
    );
}

export default CarouselComponent;