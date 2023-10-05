import { Carousel } from 'react-responsive-carousel';
import style from './../styles/ComponentStyles/Carousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fimage from './../images/vuz-4.jpg';
import timage from './../images/timage.jpg';
import simage from './../images/simage.jpg';







const CarouselWin: React.FC = () => {
    return (
        <section className={style.window}>
            <Carousel className={style.carousel}  showArrows={true} >
                <div><img src={fimage}/></div>
                <div><img src={timage}/></div>
                <div><img src={simage}/></div>
            </Carousel>
        </section>
    )
}

export default CarouselWin;