'use client';

import { FormEvent, useState } from 'react';
import { formDataValue } from './data';

import handleChange from '../../../../core/handleChangeForm';

export default function TrabalheConoscoForm(){

    const [formData, setFormData] = useState(formDataValue);

    const onsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form onSubmit={onsubmit} className="flex flex-col">
            <label className="font-bold my-2" htmlFor="nomeCompleto">Nome completo <strong className="text-red-600">*</strong></label>
            <input value={formData.nomeCompleto} onChange={(change) => handleChange(change,setFormData)} type="text" className="inputDefault bg-brand-403 rounded p-2 outline-0" name="nomeCompleto"/>

            <label className="font-bold my-2" htmlFor="email">Email <strong className="text-red-600">*</strong></label>
            <input value={formData.email} onChange={(change) => handleChange(change,setFormData)} type="text" className="inputDefault bg-brand-403 rounded p-2 outline-0" name="email"/>

            <label className="font-bold my-2" htmlFor="telefone">Telefone <strong className="text-red-600">*</strong></label>
            <input value={formData.telefone} onChange={(change) => handleChange(change,setFormData)} type="text" className="inputDefault bg-brand-403 rounded p-2 outline-0" name="telefone"/>

            <label className="font-bold my-2" htmlFor="areaInteresse">Area de interesse <strong className="text-red-600">*</strong></label>
            <select value={formData.areaInteresse} onChange={(change) => handleChange(change,setFormData)} className="inputDefault bg-brand-403 rounded p-2 outline-0" name="areaInteresse">
                <option value={1}>Desenhista</option>
                <option value={2}>Projetista</option>
                <option value={3}>Desenhista/Projetista</option>
                <option value={4}>Engenheiro</option>
            </select>

            <label className="font-bold my-4" htmlFor="mensagem">Mensagem <strong className="text-red-600">*</strong></label>
            <textarea rows={5} value={formData.mensagem} onChange={(change) => handleChange(change,setFormData)} className="inputDefault resize-none bg-brand-403 rounded p-2 outline-0" name="mensagem"></textarea>

            <button className="my-10 rounded bg-brand-401 text-white p-2">Enviar</button>
        </form>
    );
}