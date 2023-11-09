import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetDataUserInfo = async (emailId) => {

    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.get(`https://drivingapi.azurewebsites.net/api/Students/getStudentById?id=${emailId}`, { headers });
    return response.data;
}


const useGetUserById = (emailId) => {

    return useQuery({ queryKey: ['user', emailId], queryFn: () => fetDataUserInfo(emailId), staleTime: 60000 })
}

export default useGetUserById