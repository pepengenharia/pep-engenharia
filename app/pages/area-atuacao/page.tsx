import './page.css';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import AreaDeAtuacaoCard, { IareaDeAtuacaoCardProps } from './card/page';
import { areasDeAtuacaoData } from './card/data';

export default function AreaAtuacao() {

  const areasDeAtuacao = areasDeAtuacaoData;

  return ( 
    <main>
      <Header/>
      <div className="container-global">
        <p className="my-20">
          Fundada em 1995 com P&P Desenhos e Apoio Técnico Ltda, a empresa passou a se chamar Pellegrino & Pellegrino Projetos e Apoio Técnico Ltda em 22 de Setembro de 1999, usando o nome fantasia P&P. Com Ubirajara Pellegrino e Marcello Pellegrino como principais fundadores, garantimos segurança e compromisso na prestação de serviços no treinamento contínuo da equipe.
        </p>
        <h2 className="text-xl font-bold">Nossas áreas de atuação são:</h2>
        {
          areasDeAtuacao.map((areaDeAtuacao: IareaDeAtuacaoCardProps) => {
            return <AreaDeAtuacaoCard pathImage={areaDeAtuacao.pathImage} alt={areaDeAtuacao.alt} textoAreaDeAtuacao={areaDeAtuacao.textoAreaDeAtuacao}/>
          })
        }
        
        <img src="" alt="" />
      </div>
      <Footer/>
    </main>
  )
}
