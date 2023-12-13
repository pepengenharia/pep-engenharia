import './page.css';
import Header from '../components/header/page';
import Footer from '../components/footer/page';

export default function Home() {
  return ( 
    <main>
      <Header/>
      <div className="container-home">
        <div className="container-img-home">
        </div>
        <div className="text-home-bg">
          <div className="container-global">
            <h1 className="text-white text-4xl font-bold">Construindo legados</h1>
            <h1 className="text-white text-4xl font-bold">Engenharia com experiência desde 1995</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
