import './page.css';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import Splide from './splide/page';

export default function AreaAtuacao() {
  return ( 
    <main>
      <Header/>
      <div className="container-global my-10">
        <h1 className="text-3xl font-bold">Conheça alguns de nossos projetos realizados</h1>
        <div className="container-splide my-20 bg-brand-401 p-20 rounded-lg">
          <Splide/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
