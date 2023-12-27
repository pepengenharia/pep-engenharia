import type { NextApiRequest, NextApiResponse } from 'next'

import { returnDefaultApi } from '../../core/defaultReturnApi';
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.method !== 'POST') {
    res.status(405).json(returnDefaultApi('O metodo enviado não é POST', 405, null));
    return;
  }

  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TO_MAIL,
    subject: req.body.subjectMail,
    text: req.body.bodyMail,
  };
  
  transporter.sendMail(mailOptions);

  res.status(200).json(returnDefaultApi('E-mail enviado com sucesso!',200,null));
}