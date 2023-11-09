import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const sampleTestUrl = 'https://drivingapi.azurewebsites.net/api/SampleTest/getAllSampleTest'

const getSampleTest = async () => {
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const response = await axios.get(sampleTestUrl, { headers });
    return response.data;
}

const useGetAllSampleTest = () => {
    return useQuery({ queryKey: ['samples'], queryFn: getSampleTest, staleTime: 60000 });
}

export default useGetAllSampleTest