import { useEffect } from "react"
import { Categoria } from "../components/categoria"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Modalidades } from "../components/modalidades"
import { Nav } from "../components/nav"
import { Objectivo } from "../components/objectivo"
import { Organiza } from "../components/organiza"
import { Lugar } from "../components/lugar"

const Semilleros = () => {
  useEffect(() => {
    const mainContainer = document.getElementById('Scroll');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, []);
  return (
    <div id='Scroll'>
      <Nav tipo={2}/>
      <Header tipo={2} />
      <Lugar />
      <Organiza tipo={2} />
      <Objectivo tipo={2} />
      <Categoria />
      <Modalidades tipo={2} />
      <Footer tipo={2} />
    </div>
  )
}

export default Semilleros