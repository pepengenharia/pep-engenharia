import './page.css';
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';


import { equipeData } from './card/data';
import EquipeCard, { IequipeCardProps } from './card/card';

export default function AreaAtuacao() {
  return ( 
    <main>
      <Header/>
      <div className="container-global">
        <p className='my-10'>
          Abaixo estão os profissionais fundadores da P&P , que estarão diretamente envolvidos nos projetos executados, exemplificando suas experiências na área, como forma de assegurar a perfeita observância dos preceitos da qualidade total dos Serviços prestados.
            <br /><br />
          Além de seus fundadores a P&P, mantém uma equipe gabaritada para o desenvolvimento das suas atividades, contando com profissionais de boa experiência, mesclados com profissionais de “sangue novo”, ao qual consideramos de extrema importância para a continuidade das nossas atividades dentro dos padrões da P&P.
            <br /><br />
          A P&P procura estar sempre aperfeiçoando, treinando e orientando seus profissionais e seus procedimentos por intermédio de cursos, palestras e estudos, sempre observando as necessidades e deficiências encontradas no dia a dia de um projeto, além das experiências vividas por seus profissionais.
            <br /><br />
          A P&P procura não só atuar no aspecto técnico dos seus profissionais, mas também nas áreas de relacionamento e gerenciamento pessoa/equipe, o que possibilita uma atualização no processo produtivo, como assegura na qualificação proposta.
        </p>
        {
          equipeData.map((colaborador: IequipeCardProps) => {
            return <EquipeCard key={colaborador?.id} pathImage={colaborador.pathImage} nomeColaborador={colaborador.nomeColaborador} descricaoColaborador={colaborador.descricaoColaborador} alt={colaborador.alt}/>
          })
        }
      </div>
      <Footer/>
    </main>
  )
}
