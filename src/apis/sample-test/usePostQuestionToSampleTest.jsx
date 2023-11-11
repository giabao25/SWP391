import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const addQuestionURL = 'https://drivingapi.azurewebsites.net/api/SampleTest/insertSampleTestQuestion'

const addQuestionData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(addQuestionURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostQuestionToSampleTest = () => {
    const queryClient = useQueryClient()
    const addQuestion = useMutation({
        mutationFn: addQuestionData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['sample'] })
        },
        onError: () => {
            console.log('cant not add')
        }
    })
    return { addQuestion: addQuestion.mutate, addQuestionPending: addQuestion.isPending }

}

export default usePostQuestionToSampleTest