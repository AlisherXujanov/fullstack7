import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BlogSlideItem from "./BlogSlideItem.jsx"

function CarouselComponent(props) {
    const imgStyle = {
        filter: props.blurred ? "grayscale(100%) brightness(0.5)" : "none"
    }
    const indicatorsAsNumbers = (onClickHandler, isSelected, index, label, maxVisibleIndicators) => {
        const selected_index = index + 1

        return (
            <span
                className={isSelected ? "indicator selected" : "indicator"}
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
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                renderIndicator={props.indicatorsAsNumbers ? indicatorsAsNumbers : undefined}
            >
                {
                    props.indicatorsAsNumbers ?
                        props.images.map((slide, index) => {
                            return (
                                <div className="c-slide-wrapper" key={10000 + index}>
                                    {
                                        slide.map((info, index) => {
                                            return (
                                                <div key={index} className="slide">
                                                    <BlogSlideItem info={info} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                        :
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