import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const newSampleTestURL = 'https://drivingapi.azurewebsites.net/api/SampleTest/insertSampleTest'

const postNewTestSample = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(newSampleTestURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostNewSampleTest = () => {
    const queryClient = useQueryClient()
    const postNewTest = useMutation({
        mutationFn: postNewTestSample,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['samples'] })
        },
        onError: () => {
            console.log('cant not add')
        }
    })
    return { postNewTest: postNewTest.mutate, postNewTestPending: postNewTest.isPending }

}

export default usePostNewSampleTest