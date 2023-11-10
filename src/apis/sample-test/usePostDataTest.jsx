import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const insertAnswerURL = 'https://drivingapi.azurewebsites.net/api/StudentTest/insert'

const insertAnswersData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(insertAnswerURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostDataTest = () => {
    const queryClient = useQueryClient()
    const insertAnswer = useMutation({
        mutationFn: insertAnswersData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['question'] })
            queryClient.invalidateQueries({ queryKey: ['theories'] })
        },
        onError: () => {
            console.log('cant not insert answers')
        }
    })
    return { insertAnswer: insertAnswer.mutate, insertAnswerPending: insertAnswer.isPending }

}

export default usePostDataTest