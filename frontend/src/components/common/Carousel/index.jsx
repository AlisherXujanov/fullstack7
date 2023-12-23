import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    const imgStyle = {
        filter: props.blurred ? "grayscale(100%)" : "none"
    }
    return (
        <>
            <div className="carousel-c-children">
                { props.children }
            </div>
            <Carousel autoPlay={true} infiniteLoop={true}>
                {
                    props.images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img 
                                    style={imgStyle}
                                    src={img} 
                                    alt={"Carousel-item-" + index} 
                                    width={"100%"}
                                    height="600"
                                />
                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    );
}

export default CarouselComponent;