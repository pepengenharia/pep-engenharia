interface ReturnDefaultApi{
    message: string;
    status: number;
    data: any;
    reqTime: Date
}

const returnDefaultApi = (message: string, status: number, data: any): ReturnDefaultApi => {
    return {
        message,
        status,
        data,
        reqTime: new Date()
    }
}

export { returnDefaultApi };