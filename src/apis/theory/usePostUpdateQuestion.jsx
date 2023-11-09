import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const updateQuestionURL = 'https://drivingapi.azurewebsites.net/api/Questions/uppdate'

const updateQuestionData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.put(updateQuestionURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostQuestionUpdate = () => {
    const queryClient = useQueryClient()
    const updateQuestion = useMutation({
        mutationFn: updateQuestionData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['question'] })
            queryClient.invalidateQueries({ queryKey: ['theories'] })
        },
        onError: () => {
            console.log('cant not update')
        }
    })
    return { updateQuestion: updateQuestion.mutate, updateQuestionPending: updateQuestion.isPending }

}

export default usePostQuestionUpdate