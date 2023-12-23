import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent(props) {
    return (
        <>
            <Carousel>
                <div className="carousel-c-children">
                    { props.children }
                </div>
                {
                    props.images.map((img, index) => {
                        return (
                            <div key={index}>
                                <img 
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