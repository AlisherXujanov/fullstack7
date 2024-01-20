import CarouselComponent from "../common/Carousel"

const slides = []

function CompanyBlog() {
    return (
        <CarouselComponent
            images={slides}
            indicatorsAsNumbers={true}
        />
    );
}

export default CompanyBlog;