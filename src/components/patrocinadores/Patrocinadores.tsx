import './Patrocinadores.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import logo1 from '../../assets/patrocinadores/img1.png';
import logo2 from '../../assets/patrocinadores/img2.png';
import logo3 from '../../assets/patrocinadores/img3.png';
import logo4 from '../../assets/patrocinadores/img4.png';
import logo5 from '../../assets/patrocinadores/img5.png';
import logo6 from '../../assets/patrocinadores/img6.webp';
import logo7 from '../../assets/patrocinadores/img7.png';
import logo8 from '../../assets/patrocinadores/img8.png';
import logo9 from '../../assets/patrocinadores/img9.png';
import logo10 from '../../assets/patrocinadores/img10.png';
import logo11 from '../../assets/patrocinadores/img11.png';
import logo12 from '../../assets/patrocinadores/img12.png';
import logo13 from '../../assets/patrocinadores/img13.png';
import logo14 from '../../assets/patrocinadores/img14.png';
import logo15 from '../../assets/patrocinadores/img15.png';
import logo16 from '../../assets/patrocinadores/img16.png';
import logo17 from '../../assets/patrocinadores/img17.png';
import logo18 from '../../assets/patrocinadores/img18.png';
import logo19 from '../../assets/patrocinadores/img19.png';
import logo20 from '../../assets/patrocinadores/img20.png';
import logo21 from '../../assets/patrocinadores/img21.png';
import logo22 from '../../assets/patrocinadores/img22.png';
import logo23 from '../../assets/patrocinadores/img23.png';
import logo24 from '../../assets/patrocinadores/img24.png';
import { useLanguage } from '../../context/LanguageContext';

const Patrocinadores = () => {
    const { language } = useLanguage(); // Obtener el idioma actual

    // Objeto con traducciones
    const textData = {
        es: {
            titulo: "Patrocinadores",
            descripcion: "Nada de esto sería posible sin el apoyo increíble de nuestros patrocinadores. Gracias a ellos, el Congreso Científico 2025 se transforma en una experiencia inolvidable, impulsando la innovación y la educación. ¡Juntos estamos creando el futuro!",
        },
        en: {
            titulo: "Sponsors",
            descripcion: "None of this would be possible without the amazing support of our sponsors. Thanks to them, the Scientific Congress 2025 transforms into an unforgettable experience, driving innovation and education. Together we are creating the future!",
        },
    };

    return (
        <div className='Patrocinadores'>
            <div className='Patrocinadores_Content'>
                <div className="Patrocinadores_Content_img">
                    <h2>{textData[language].titulo}</h2>
                    <p>{textData[language].descripcion}</p>

                    <div className='Patrocinadores_Content_Swiper'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                                reverseDirection: false
                            }}
                            modules={[Autoplay, Pagination]}
                            breakpoints={{
                                // Configuración por defecto (pantallas más grandes)
                                700: {
                                    slidesPerView: 4,
                                },
                                // Configuración para pantallas pequeñas (menor a 700px)
                                0: {
                                    slidesPerView: 1,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src={logo1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo2} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo3} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo4} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo5} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo6} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo7} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo8} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo9} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo10} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo11} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo12} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo13} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo14} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo15} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo16} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo17} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo18} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo19} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo20} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo21} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo22} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo23} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src={logo24} alt="" />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Patrocinadores;
