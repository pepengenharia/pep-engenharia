import './page.css';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import Image from 'next/image';

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
      <div className="max-2xl:flex-col flex justify-between bg-brand-401">
        <div className="w-3/6 max-2xl:w-full max-2xl:flex max-2xl:justify-center max-2xl:mt-20 max-2xl:px-20">
          <Image src={'/images/bg/bg-tubulacao.jpg'} width={2000} height={2000} alt={''}/>
        </div>
        <div className="w-3/6 max-2xl:w-full max-2xl:mb-20 max-2xl:px-20 text-center text-white">
          <h1 className="text-2xl font-bold p-20">Bem-vindos à P&P Engenharia</h1>
          <p className="text-xl">Atuamos na prestação de serviços e fornecimento de mão de obra especializada para projetos de Engenharia em diversas áreas.</p>
          <p className="text-xl">
Nosso objetivo é sempre colaborar com os clientes, adaptando-nos às suas necessidades e seguindo rigorosamente suas normas, tornando-nos parte integrante de suas equipes. Além disso, oferecemos consultoria em Tubulação Industrial e Predial, Hidráulica, estruturas metálicas e coordenação geral de Projetos, visando aprimorar a produção e a qualidade dos serviços.</p>
          <p className="text-xl">Priorizamos a atualização contínua, tanto na formação da equipe quanto na tecnologia utilizada. Contamos com máquinas modernas e programas atualizados, permitindo-nos garantir a qualidade dos resultados e otimizar a produção.</p>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
