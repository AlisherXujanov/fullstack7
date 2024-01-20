import CarouselComponent from "../common/Carousel"
import blogs from "../../db/blog.json"


// Separate blog items by 3 items per slide
let slides = []
for (let item of blogs) {
    let last_arr_slide = slides[slides.length - 1]

    if (!last_arr_slide) {
        slides.push([item])
    } else {
        if (last_arr_slide.length < 3) {
            last_arr_slide.push(item)
        } else {
            slides.push([item])
        }
    }
}


function CompanyBlog() {
    return (
        <>
            <CarouselComponent
                images={slides}
                indicatorsAsNumbers={true}
            />
            
        </>
    );
}

export default CompanyBlog;