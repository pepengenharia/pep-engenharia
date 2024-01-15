import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import ContatoForm from './form/page';

import './page.css';

export default function Contato(){
    return(
        <main>
            <Header/>
            <div className="container-global my-10">
                <h1 className="text-3xl font-bold my-10">Entre em contato conosco!</h1>
                <div className="container-info flex justify-between bg-brand-401 text-white rounded">
                    <div className="infoTexto flex flex-col justify-center">
                        <h1>Ligue para nós</h1>
                        <p>(31) 3224-2628</p>
                        <br />
                        <h1>Localização</h1>
                        <p>Rua da Bahia no. 573 – 14º. Andar</p>
                        <br />
                        <h1>Horário comercial</h1>
                        <p>Seg - Sex: 08 à 18h</p>
                    </div>
                </div>
                <ContatoForm/>
            </div>
            <Footer/>
        </main>
    );
}