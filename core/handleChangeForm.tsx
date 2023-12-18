'use client';

import { ChangeEvent, SetStateAction } from "react";

const handleChange = (change: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, setFormData: SetStateAction<any>) => {
    const { name, value } = change.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
};

export default handleChange;