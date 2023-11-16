import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

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
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const updateQuestion = useMutation({
        mutationFn: updateQuestionData,
        onSuccess: () => {
            enqueueSnackbar('Thay đổi câu hỏi thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            queryClient.invalidateQueries({ queryKey: ['question'] })
            queryClient.invalidateQueries({ queryKey: ['theories'] })
        },
        onError: () => {
            enqueueSnackbar('Có lỗi xảy ra', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        }
    })
    return { updateQuestion: updateQuestion.mutate, updateQuestionPending: updateQuestion.isPending }

}

export default usePostQuestionUpdate