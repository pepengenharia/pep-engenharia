import Image from 'next/image';

export interface IequipeCardProps{
    id?: number;
    descricaoColaborador: string;
    nomeColaborador: string;
    pathImage: string;
    alt: string;
}

export default function EquipeCard(equipeCardProps: IequipeCardProps){
    return (
        <div className='flex mb-8 max-2xl:flex-col'>
            <div className='flex flex-col items-center mr-8 w-1/5 max-2xl:w-full'>
                <Image className='w-44 h-44 rounded-full' src={equipeCardProps.pathImage} alt={equipeCardProps.alt} width={200} height={0}/>
                <label>{equipeCardProps.nomeColaborador}</label>
            </div>
            <div className='max-2xl:text-center max-2xl:mt-2 w-4/5 max-2xl:w-full'>
                <p>{equipeCardProps.descricaoColaborador}</p>
            </div>
        </div>
    );
}