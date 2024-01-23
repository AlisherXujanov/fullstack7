import CarouselComponent from "../common/Carousel"
import blogs from "../../db/blog.json"
import { useEffect, useState } from "react"



function CompanyBlog() {
    const [slides, setSlides] = useState([])

    // Separate blog items by 3 items per slide
    let large_screen = window.matchMedia("(max-width: 1100px)")
    let medium_screen = window.matchMedia("(max-width: 855px)")

    useEffect(() => {
        getSlides()
    }, [window.screen.width, getSlides])

    function getSlides() {
        let breakPointItemsNumber = 3
        if (large_screen.matches) {
            breakPointItemsNumber = 2
        }
        if (medium_screen.matches) {
            breakPointItemsNumber = 1
        }
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
        setSlides(slides)
    }

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