'use client'

import '../page.css';

export default function SkeletonHeaderNav(){

    return(
        <nav className='flex gap-5 bg-brand-401 p-2 px-5 rounded'>
            <a href="/"><p className={`text-sm`}>HOME</p></a>
            <a href="/pages/area-atuacao"><p className={`text-sm`}>ÁREAS DE ATUAÇÃO</p></a>
            <a href="/pages/projetos-realizados"><p className={`text-sm`}>PROJETOS REALIZADOS</p></a>
            <a href="/pages/equipe"><p className={`text-sm`}>EQUIPE</p></a>
            <a href="/pages/trabalhe-conosco"><p className={`text-sm`}>TRABALHE CONOSCO</p></a>
            <a href="/pages/contato"><p className={`text-sm`}>CONTATO</p></a>
        </nav>
    );
}