import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const getTotal = async (sampleId) => {

    const userId = localStorage.getItem('userId');
    const id = encodeURIComponent(userId)
    const token = localStorage.getItem('token');

    const headers = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.get(`https://drivingapi.azurewebsites.net/api/StudentTest/countTotalTrue?sampleId=${sampleId}&studentId=${id}`, { headers });
    return response.data;
}


const useGetTotalChoose = (sampleId) => {

    return useQuery({ queryKey: ['totalChose', sampleId], queryFn: () => getTotal(sampleId), staleTime: 60000 })
}

export default useGetTotalChoose