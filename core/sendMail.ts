const sendMail = (fromMail: string, bodyMail: string, subjectMail: string) => {
    fetch(process.env.URL_API + 'mail',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fromMail,
            bodyMail,
            subjectMail
          }),
    });
}

export { sendMail };