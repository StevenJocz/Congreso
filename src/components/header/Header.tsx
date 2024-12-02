import './Header.css'
import logo from '../../assets/svg/logo.svg';
import img from '../../assets/img/imageDos.png';
import imgDos from '../../assets/img/imagendos.png';
import svgDos from '../../assets/svg/banner_shape.svg'
import svg from '../../assets/svg/bg_dots.svg'
import mapa from '../../assets/img/mapaBlanco.png'
import { useLanguage } from '../../context/LanguageContext';
interface Props {
    tipo: number;
}

const Header: React.FC<Props> = (props) => {
    const { language} = useLanguage();

    const textData = {
        es: {
            Titulo: "CONGRESO CIENTÍFICO DE UNIVERSIDADES ADVENTISTAS LATINOAMERICANAS",
            Texto: "Tecnología, ciencia e innovación contribuyendo a la misión",
            Fecha: "13-17 Mayo 2025",
            TituloDos: "III ENCUENTRO INTERNACIONAL DE SEMILLEROS DE INVESTIGACIÓN",
            TextoDos: "DE UNIVERSIDADES ADVENTISTAS LATINOAMERICANAS",
            FechaDos: "13 Mayo 2025",
        },
        en: {
            Titulo: "LATIN AMERICAN ADVENTIST UNIVERSITIES SCIENTIFIC CONGRESS",
            Texto: "Technology, science, and innovation contributing to the mission",
            Fecha: "May 13-17, 2025",
            TituloDos: "III INTERNATIONAL MEETING OF RESEARCH SEEDBEDS",
            TextoDos: "OF LATIN AMERICAN ADVENTIST UNIVERSITIES",
            FechaDos: "May 13, 2025",
        },
    };



    return (
        <div className='Header'>
            <div className={`Header_Fondo ${props.tipo == 1 ? 'Header_FondoUno' : 'Header_FondoDos'}`}></div>
            <div className='Header_Content'>
                <div className="Header_Content--left">
                    <div>
                        <h2>2025</h2>
                        <h1>{props.tipo == 1 ? textData[language].Titulo : textData[language].TituloDos}</h1>
                        <h3>{props.tipo == 1 ?textData[language].Texto :textData[language].TextoDos}</h3>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="Header_Content--right">
                    <img className={`${props.tipo == 2 ? 'imgDos' : ''}`} src={props.tipo == 1 ? img : imgDos} alt="" />
                    <img className="svg" src={svg} alt="" />
                    <div className={`${props.tipo == 2 ? 'FechaDos' : ''}`}>
                        <h2>{props.tipo == 1 ? textData[language].Fecha : textData[language].FechaDos}</h2>
                    </div>
                </div>
                <img className="svgDos" src={svgDos} alt="" />
                <img className="mapa" src={mapa} alt="" />
            </div>
        </div>
    )
}

export default Header