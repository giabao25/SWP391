import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const userUrl = 'https://drivingapi.azurewebsites.net/api/Students/getAllStudent'

const getAllUsers = async () => {
    const token = localStorage.getItem('token');

    const headers = {
        Authorization: `Bearer ${token}`
    };
    const response = await axios.get(userUrl, { headers });
    return response.data;
}

const useGetUser = () => {
    return useQuery({ queryKey: ['users'], queryFn: getAllUsers, staleTime: 60000 });
}

export default useGetUser