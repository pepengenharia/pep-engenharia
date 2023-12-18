import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';

import TrabalheConoscoForm from './form/page';


export default function TrabalheConosco(){
    return (
        <main>
            <Header/>
            <div className="container-global">
                <h1 className="text-3xl font-bold my-10">Venha trabalhar com a gente!</h1>
                <TrabalheConoscoForm/>
            </div>
            <Footer/>
        </main>
    );
}