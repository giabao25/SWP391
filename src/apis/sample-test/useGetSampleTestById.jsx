import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetchTheoryQuestionById = async (sampleId) => {

    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.get(`https://drivingapi.azurewebsites.net/api/SampleTest/getSampleTestById?id=${sampleId}`, { headers });
    return response.data;
}


const useGetSampleTestById = (sampleId) => {

    return useQuery({ queryKey: ['sample', sampleId], queryFn: () => fetchTheoryQuestionById(sampleId), staleTime: 60000 })
}

export default useGetSampleTestById