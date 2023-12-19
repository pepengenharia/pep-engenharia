'use client';

import { FormEvent, useState } from 'react';
import { formDataValue } from './data';

import handleChange from '../../../../core/handleChangeForm';

export default function ContatoForm(){

    const [formData, setFormData] = useState(formDataValue);

    const onsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(process.env.URL_API + 'mail',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fromMail: 'leonardojbpellegrino@gmail.com'
              }),
        });
    }

    return (
        <form onSubmit={onsubmit} className="flex flex-col bg-brand-403 text-black p-10 gap-10 rounded">
            <h1 className="text-2xl font-bold">CONTATE-NOS</h1>
            <input value={formData.nomeCompleto} onChange={(change) => handleChange(change,setFormData)} name="nomeCompleto" className="bg-brand-403 outline-0 p-2" type="text" placeholder="Insira seu nome" />
            <input value={formData.email} onChange={(change) => handleChange(change,setFormData)} name="email" className="bg-brand-403 outline-0 p-2" type="text" placeholder="Insira seu e-mail" />
            <textarea value={formData.mensagem} onChange={(change) => handleChange(change,setFormData)} name="mensagem" className="bg-brand-403 outline-0 p-2 resize-none" rows={5}></textarea>
            <button className="text-sm">ENVIAR</button>
        </form>
    )
}