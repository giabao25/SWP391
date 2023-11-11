import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const insertAnswerURL = 'https://drivingapi.azurewebsites.net/api/StudentTest/insertStudentTest'

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
    const nav = useNavigate()
    const insertAnswer = useMutation({
        mutationFn: insertAnswersData,
        onSuccess: () => {
            console.log('success')
            nav(`/result/sample_test`)
        },
        onError: (error) => {
            console.log(error)
            console.log('cant not insert answers')
        }
    })
    return { insertAnswer: insertAnswer.mutate, insertAnswerPending: insertAnswer.isPending }

}

export default usePostDataTest