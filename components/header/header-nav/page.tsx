'use client'

import './page.css';

export default function HeaderNav(){

    const checkRouterSelected = (actualRoute: string) => {

        const url = new URL(window.location.href);
        const params = url.pathname.split('/');

        if(params[2]){
            params[1] = params[2];
        }

        if(params[1] === actualRoute){
            return 'text-brand-402';
        }
        
        return '';
    }

    return(
        <nav className='flex gap-5 bg-brand-401 p-2 px-5 rounded'>
            <a href="/"><p className={`text-sm ${checkRouterSelected('')}`}>HOME</p></a>
            <a href="/pages/area-atuacao"><p className={`text-sm ${checkRouterSelected('area-atuacao')}`}>ÁREAS DE ATUAÇÃO</p></a>
            <a href="/pages/projetos-realizados"><p className={`text-sm ${checkRouterSelected('projetos-realizados')}`}>PROJETOS REALIZADOS</p></a>
            <a href="/pages/equipe"><p className={`text-sm ${checkRouterSelected('equipe')}`}>EQUIPE</p></a>
            <a href="/pages/trabalhe-conosco"><p className={`text-sm ${checkRouterSelected('trabalhe-conosco')}`}>TRABALHE CONOSCO</p></a>
            <a href="/pages/contato"><p className={`text-sm ${checkRouterSelected('contato')}`}>CONTATO</p></a>
        </nav>
    );
}