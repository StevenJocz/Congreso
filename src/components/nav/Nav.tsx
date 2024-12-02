import './Nav.css'
import img from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import es from '../../assets/img/colombia.jpg'
import en from '../../assets/img/usa.jpg'
import { IonIcon } from '@ionic/react';
import { reorderThreeOutline, closeOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from 'react';

interface Props {
  tipo: number;
}


const Nav: React.FC<Props> = (props) => {
  const { language, toggleLanguage } = useLanguage();
  const [verMenu, setVerMenu] = useState(false);
  const [verRecursos, setVerRecursos] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToInscripcion = () => {
    const element = document.getElementById('Inscripcion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {


    // Listener para detectar clic fuera del menú
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setVerRecursos(false); // Cerrar el menú si se hace clic fuera de él
      }
    };

    if (verRecursos) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Limpiar el listener cuando se desmonte el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [verRecursos]);

  const handdleVerMenu = () => {
    setVerMenu(!verMenu)
  }

  const handdleVerRecursos = () => {
    setVerRecursos(!verRecursos)
  }

  const textData = {
    es: {
      Titulo: "SEMILLEROS 2025",
      TituloUno: "CONGRESO 2025",
      liUno: "Congreso",
      liDos: "Semilleros",
      liTres: "Inscríbete",
      liCuatro: "Recursos",
      Ponente : "Ponente",
      Recursos: {
        Membrete: "Membrete",
        Libro: "Libro",
        MedellinTravel: "Medellín travel",
        ModeloPoster: "Modelo de poster semilleros",
        Precios: "Precios 2025"
      }
    },
    en: {
      Titulo: "SEEDBEDS 2025",
      TituloUno: "CONGRESS 2025",
      liUno: "Congress",
      liDos: "Seedbeds",
      liTres: "Register",
      liCuatro: "Resources",
      Ponente : "Speaker",
      Recursos: {
        Membrete: "Letterhead",
        Libro: "Book",
        MedellinTravel: "Medellín travel",
        ModeloPoster: "Poster template",
        Precios: "Prices 2025"
      }
    },
  };

  return (
    <div className={`NavBar ${props.tipo == 1 ? 'NavBarFondoUno' : 'NavBarFondoDos'}`}>
      <div>
        <img className='img' src={img} alt="" />
        <h1>{props.tipo == 1 ? textData[language].TituloUno : textData[language].Titulo}</h1>
      </div>

      <ul className='ulGrande'>
        <Link to="/">
          <li className="">{textData[language].liUno}</li>
        </Link>
        <Link to="/Ponente">
            <li className="">{textData[language].Ponente}</li>
          </Link>
        <Link to="/Semilleros">
          <li className="">{textData[language].liDos}</li>
        </Link>
        <li className='liTres' onClick={scrollToInscripcion}>{textData[language].liTres}</li>

        <li className="liCuatro" onClick={handdleVerRecursos} >{textData[language].liCuatro}</li>
        <li className='liCinco'><IonIcon className="icono" icon={reorderThreeOutline} onClick={handdleVerMenu} /></li>
        <li >
          <div>
            <img src={es} alt="" onClick={() => toggleLanguage('es')} style={{ cursor: 'pointer' }} />
            <img src={en} alt="" onClick={() => toggleLanguage('en')} style={{ cursor: 'pointer' }} />
          </div>
        </li>

        {verRecursos && (
          <section ref={menuRef} className='divRecursos'>
            <ul>
              <li>{textData[language].Recursos.Membrete}</li>
              <Link to="https://drive.google.com/file/d/12hFuKRryGr3VZO3Y9MeAP4WqXw7ncTOD/view" target="_blank" >
                <li>{textData[language].Recursos.Libro}</li>
              </Link>
              <Link to="https://www.medellin.travel" target="_blank">
                <li>{textData[language].Recursos.MedellinTravel}</li>
              </Link>
              <Link to="https://docs.google.com/presentation/d/1itlpOtLMmDATRMAbpZPG46G0NeprKVnZ/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true" target="_blank">
                <li>{textData[language].Recursos.ModeloPoster}</li>
              </Link>
              <Link to="https://docs.google.com/document/d/1X6STuV4B3qWOgf2oDrS1AvFOYpAB88_Z/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true" target="_blank">
                <li>Template short paper</li>
              </Link>
              <Link to="https://drive.google.com/file/d/1uqMI86wXAZ65_dAnH4E5nFAs2-iaCZAk/view?usp=sharing" target="_blank">
                <li>{textData[language].Recursos.Precios}</li>
              </Link>
            </ul>
          </section>
        )}
      </ul>

      {verMenu &&
        <ul className='ulResponsive'>
          <IonIcon className="icono" icon={closeOutline} onClick={handdleVerMenu} />
          <Link to="/">
            <li className="">{textData[language].liUno}</li>
          </Link>
          <Link to="/Ponente">
            <li className="">{textData[language].Ponente}</li>
          </Link>
          <Link to="/Semilleros">
            <li className="">{textData[language].liDos}</li>
          </Link>
          <li className='liTres' onClick={scrollToInscripcion}>{textData[language].liTres}</li>
          <li className=""  >{textData[language].liCuatro}</li>
          <section ref={menuRef} className='divRecursos'>
            <ul>
              <li>{textData[language].Recursos.Membrete}</li>
              <Link to="https://drive.google.com/file/d/12hFuKRryGr3VZO3Y9MeAP4WqXw7ncTOD/view" target="_blank" >
                <li>{textData[language].Recursos.Libro}</li>
              </Link>
              <Link to="https://www.medellin.travel" target="_blank">
                <li>{textData[language].Recursos.MedellinTravel}</li>
              </Link>
              <Link to="https://docs.google.com/presentation/d/1itlpOtLMmDATRMAbpZPG46G0NeprKVnZ/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true" target="_blank">
                <li>{textData[language].Recursos.ModeloPoster}</li>
              </Link>
              <Link to="https://docs.google.com/document/d/1X6STuV4B3qWOgf2oDrS1AvFOYpAB88_Z/edit?usp=sharing&ouid=114926607155563781567&rtpof=true&sd=true" target="_blank">
                <li>Template short paper</li>
              </Link>
              <Link to="https://drive.google.com/file/d/1uqMI86wXAZ65_dAnH4E5nFAs2-iaCZAk/view?usp=sharing" target="_blank">
                <li>{textData[language].Recursos.Precios}</li>
              </Link>
            </ul>
          </section>
        </ul>
      }
    </div>
  )
}

export default Nav