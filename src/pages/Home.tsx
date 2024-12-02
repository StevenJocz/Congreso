import { useEffect } from 'react'
// import { Contacto } from '../components/contacto'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Modalidades } from '../components/modalidades'
import { Nav } from '../components/nav'
import { Objectivo } from '../components/objectivo'
import { Organiza } from '../components/organiza'
import { Patrocinadores } from '../components/patrocinadores'
import { VideoPromocional } from '../components/videoPromocional'
import { Conferencistas } from '../components/conferencistas'

const Home = () => {
    useEffect(() => {
        const mainContainer = document.getElementById('Scroll');
        if (mainContainer) {
            mainContainer.scrollTop = 0;
        }
    }, []);
    return (
        <div id='Scroll'>
            <Nav tipo={1}/>
            <Header tipo={1} />
            <Organiza tipo={1} />
            <VideoPromocional />
            <Modalidades tipo={1} />
            <Objectivo tipo={1} />
            <Conferencistas />
            <Patrocinadores />
            {/* <Contacto /> */}
            <Footer tipo={1} />
        </div>
    )
}

export default Home