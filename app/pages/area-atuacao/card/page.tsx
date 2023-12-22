import Image from 'next/image';

export interface IareaDeAtuacaoCardProps{
    id?: number;
    textoAreaDeAtuacao: string;
    pathImage: string;
    alt: string;
}

export default function AreaDeAtuacaoCard(areaDeAtuacaoCardProps: IareaDeAtuacaoCardProps){
    return(
        <div className="my-10">
            <Image src={areaDeAtuacaoCardProps.pathImage} width={500} height={500} alt={areaDeAtuacaoCardProps.alt}/>
            <p className="my-5">{areaDeAtuacaoCardProps.textoAreaDeAtuacao}</p>
        </div>
    );
}