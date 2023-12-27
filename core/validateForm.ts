export default function validateForm(formData: any) {
    for (const key in formData) {
        if (formData.hasOwnProperty(key) && (formData[key] === "" || formData[key] === null || !formData[key])) {
            return false;
        }
    }
    return true;
}