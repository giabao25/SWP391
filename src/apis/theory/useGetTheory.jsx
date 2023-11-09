import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const theoryURL = 'https://drivingapi.azurewebsites.net/api/Questions/getallquestion'

const getQuestionsTheory = async () => {
    const token = localStorage.getItem('token');

    const headers = {
        Authorization: `Bearer ${token}`
    };
    const response = await axios.get(theoryURL, { headers });
    return response.data;
}

const useGetTheory = () => {
    return useQuery({ queryKey: ['theories'], queryFn: getQuestionsTheory, staleTime: 60000 });
}

export default useGetTheory