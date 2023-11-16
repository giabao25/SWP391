import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

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
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const addQuestion = useMutation({
        mutationFn: addQuestionData,
        onSuccess: () => {
            enqueueSnackbar('Thêm câu hỏi thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            queryClient.invalidateQueries({ queryKey: ['sample'] })
        },
        onError: () => {
            enqueueSnackbar('Có lỗi khi thêm câu hỏi', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        }
    })
    return { addQuestion: addQuestion.mutate, addQuestionPending: addQuestion.isPending }

}

export default usePostQuestionToSampleTest