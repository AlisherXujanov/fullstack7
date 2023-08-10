import style from './notfound.scss'
import { useEffect, useState } from 'react'
function NotFound() {
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);

    useEffect(() => {
        const pageX = document.documentElement.clientWidth;
        const pageY = document.documentElement.clientHeight;

        const handleMouseMove = (event) => {
            setMouseY(event.pageY);
            const yAxis = (pageY / 2 - event.pageY) / pageY * 300;
            setMouseX(event.pageX / -pageX);
            const xAxis = -mouseX * 100 - 100;

            const ghostEyes = document.querySelector('.box__ghost-eyes');
            ghostEyes.style.transform = `translate(${xAxis}%, -${yAxis}%)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX]);

    return (
        <div className='main-box-404' style={style}>
            <div class="box_404">
                <div class="box__ghost">
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>
                    <div class="symbol"></div>

                    <div class="box__ghost-container">
                        <div class="box__ghost-eyes">
                            <div class="box__eye-left"></div>
                            <div class="box__eye-right"></div>
                        </div>
                        <div class="box__ghost-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="box__ghost-shadow"></div>
                </div>

                <div class="box__description">
                    <div class="box__description-container">
                        <div class="box__description-title">Whoops!</div>
                        <div class="box__description-text">It seems like we couldn't find the page you were looking for</div>
                    </div>

                    <a href="/" class="box__button">Go back</a>

                </div>
            </div>
        </div>
    );
}

export default NotFound;