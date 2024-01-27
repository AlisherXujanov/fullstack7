import CarouselComponent from "../common/Carousel"
import blogs from "../../db/blog.json"

function CompanyBlog() {

    // Separate blog items by 3 items per slide
    let breakPointItemsNumber = 3
    // let large_screen = window.matchMedia("(max-width: 1100px)")
    // let medium_screen = window.matchMedia("(max-width: 855px)")

    let large_screen = 1100
    let medium_screen = 855
    
    if (window.innerWidth < large_screen) {
        breakPointItemsNumber = 2
    }
    if (window.innerWidth < medium_screen) {
        breakPointItemsNumber = 1
    }

    function getSlides() {
        let slides = []
        for (let item of blogs) {
            let last_arr_slide = slides[slides.length - 1]
    
            if (!last_arr_slide) {
                slides.push([item])
            } else {
                if (last_arr_slide.length < breakPointItemsNumber) {
                    last_arr_slide.push(item)
                } else {
                    slides.push([item])
                }
            }
        }
        return slides
    }

    return (
        <>
            <CarouselComponent
                images={getSlides()}
                indicatorsAsNumbers={true}
            />

        </>
    );
}

export default CompanyBlog;