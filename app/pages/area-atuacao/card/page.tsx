import Image from 'next/image';

export interface IareaDeAtuacaoCardProps{
    textoAreaDeAtuacao: string;
    pathImage: string;
    alt: string;
}

export default function AreaDeAtuacaoCard(areaDeAtuacaoCardProps: IareaDeAtuacaoCardProps){
    return(
        <div>
            <Image src={areaDeAtuacaoCardProps.pathImage} width={500} height={500} alt={areaDeAtuacaoCardProps.alt}/>
            <p>{areaDeAtuacaoCardProps.textoAreaDeAtuacao}</p>
        </div>
    );
}