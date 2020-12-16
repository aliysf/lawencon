import axios from 'axios'
const domain = 'https://bdbusticket.firebaseio.com/'
const baseURL = `${domain}`;

export const json = axios.create({
    baseURL,
    headers:{
        'Content-type': 'application/json',
        'Authorization': 'Basic YWxpLnl1c3VmOmFsaS55dXN1ZjEyMw=='
    },
});
