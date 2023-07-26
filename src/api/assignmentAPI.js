import axiosClient from './axiosClient'

const END_POINT = {
    LOCKERS: "api/lockers",
    QRCODE: "api/qrcode"
}

//LOCKERS
export const getLockerAPI = () => {
    return axiosClient.get(`${END_POINT.LOCKERS}`)
};

export const postLockerAPI = () => {
    return axiosClient.post(`${END_POINT.LOCKERS}`)
} 

//QRCODE
export const postQRCodeAPI = () => {
    return axiosClient.post(`${END_POINT.QRCODE}`)
}