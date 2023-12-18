export interface IformDataValue {
    nomeCompleto: string
    email: string,
    telefone: string,
    mensagem: string,
    areaInteresse: number | string
}

const formDataValue: IformDataValue = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    mensagem: '',
    areaInteresse: 1,
};

export {
    formDataValue
};