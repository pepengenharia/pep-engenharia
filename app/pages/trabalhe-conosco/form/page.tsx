'use client';

import { FormEvent, useState } from 'react';
import { formDataValue } from './data';

import handleChange from '../../../../core/handleChangeForm';
import { sendMail } from '../../../../core/sendMail';
import { EnumAreaInteresse } from './ENUM';
import validateForm from '../../../../core/validateForm';

export default function TrabalheConoscoForm(){

    const [formData, setFormData] = useState(formDataValue);

    const onsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!validateForm(formData)){
            alert('Preencha todos os campos antes de enviar o formulario!');
            return;
        }
        const fromMail = formData.email;
        const bodyMail = `
            O usuario ${formData.nomeCompleto} de e-mail ${formData.email}, telefone ${formData.telefone} entrou em contato pela página "trabalhe conosco" no site.
            Area de interesse: ${formData.areaInteresse}

            ${formData.mensagem}
        `;
        sendMail(fromMail,bodyMail,'E-mail trabalhe conosco Site P&P');
        alert('E-mail enviado com sucesso!');
        setFormData(formDataValue);
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
                <option value={EnumAreaInteresse.UM}>Desenhista</option>
                <option value={EnumAreaInteresse.DOIS}>Projetista</option>
                <option value={EnumAreaInteresse.TRES}>Desenhista/Projetista</option>
                <option value={EnumAreaInteresse.QUATRO}>Engenheiro</option>
            </select>

            <label className="font-bold my-4" htmlFor="mensagem">Mensagem <strong className="text-red-600">*</strong></label>
            <textarea rows={5} value={formData.mensagem} onChange={(change) => handleChange(change,setFormData)} className="inputDefault resize-none bg-brand-403 rounded p-2 outline-0" name="mensagem"></textarea>

            <button className="my-10 rounded bg-brand-401 text-white p-2">Enviar</button>
        </form>
    );
}