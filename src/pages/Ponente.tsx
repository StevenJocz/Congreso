import { useEffect } from "react";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import ReferenciaHeader from "../components/referencias/ReferenciaHeader";


const Ponente = () => {
    useEffect(() => {
        const mainContainer = document.getElementById('Scroll');
        if (mainContainer) {
            mainContainer.scrollTop = 0;
        }
    }, []);


    return (
        <div id='Scroll'>
            <Nav tipo={1} />
            <div className="Ponente">
            <ReferenciaHeader tipo={2}/>
            </div>
            <Footer tipo={1} />
        </div>
    );
}

export default Ponente