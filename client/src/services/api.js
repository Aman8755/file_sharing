import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const uploadFile = async (data)=>{
    try {
   let respionse=   await  axios.post(`${API_URL}/upload`,data);
   return Response.data;
    } catch (error){
        console.log('error while calling the api',error.message);
    }
}

