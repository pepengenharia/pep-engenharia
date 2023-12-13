import './page.css';

export default function Footer(){
    return(
        <footer className="bg-white">
            <div className="content-footer flex justify-center items-center py-20">
                <div>
                    <center><h2 className="text-xl">P&P Engenharia</h2></center>
                    <br />
                    <p>Rua da Bahia no.573 - 11o. Andar</p>
                    <p>Belo Horizonte - Minas Gerais</p>
                    <p>CEP: 30.160.010</p><br />
                    <p>(31) 3224-2628</p>
                </div>
            </div>
            <div className="sub-bar-footer bg-brand-401 text-white">
                <div className="container-global">
                <small><p className="py-2">Copyright © 2023</p></small>
                </div>
            </div>
        </footer>
    );
}