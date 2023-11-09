import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const fetchQuesInSample = async (data) => {
    const { sampleId, questId } = data

    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const response = await axios.get(`https://drivingapi.azurewebsites.net/api/SampleTest/getBySampleTestIdAndQuestionId?sampleId=${sampleId}&questId=${questId}`, { headers });
    return response.data;
}


const useGetQuestionInSampleTest = (data) => {

    return useQuery({ queryKey: ['quest', data], queryFn: () => fetchQuesInSample(data), staleTime: 60000 })
}

export default useGetQuestionInSampleTest