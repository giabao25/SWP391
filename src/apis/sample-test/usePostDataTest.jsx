import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";
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
    const { enqueueSnackbar } = useSnackbar()
    const insertAnswer = useMutation({
        mutationFn: insertAnswersData,
        onSuccess: () => {
            enqueueSnackbar('Nộp bài thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            nav(`/result/sample_test`)
        },
        onError: (error) => {
            enqueueSnackbar('Có lỗi khi nộp bài', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        }
    })
    return { insertAnswer: insertAnswer.mutate, insertAnswerPending: insertAnswer.isPending }

}

export default usePostDataTest