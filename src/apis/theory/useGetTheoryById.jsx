import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetchTheoryQuestionById = async (questionId) => {

    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.get(`https://drivingapi.azurewebsites.net/api/Questions/${questionId}`, { headers });
    return response.data;
}


const useGetTheoryById = (questionId) => {

    return useQuery({ queryKey: ['question', questionId], queryFn: () => fetchTheoryQuestionById(questionId), staleTime: 60000 })
}

export default useGetTheoryById