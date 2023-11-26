import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './../styles/ComponentStyles/Carousel.module.css';
import first_image from './../images/vuz-4.jpg';
import second_image from './../images/timage.jpg';
import third_image from './../images/simage.jpg';

interface ImageType {
    image: string,
    id: number
}

const images: Array<ImageType> =[

    {
        image: first_image,
        id: 1
    },
    {
        image: second_image,
        id: 2
    },
    {
        image: third_image,
        id: 3
    }
]


const CarouselWin: React.FC = () => {

    


    return (
        <section className={style.window}>
            <CarouselProvider
            naturalSlideWidth={1000}
            naturalSlideHeight={600}
            totalSlides={3}
        >
                <Slider className={style.slider}>
                    {images.map(image => {
                        return (
                            <Slide key={image.id} index={image.id}><img src={image.image} className={style.image}/></Slide>
                        )
                        })}
                </Slider>
                <div className={style.Btns}>
                    <ButtonBack className={style.controlBtn}>Назад</ButtonBack>
                    <ButtonNext className={style.controlBtn}>Дальше</ButtonNext>
                </div>
            </CarouselProvider>
        </section>
    )
}

export default CarouselWin;