import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";

const addQuestionData = async (data) => {
    const { questionId, sampleTestId } = data
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(`https://drivingapi.azurewebsites.net/api/SampleTest/insertSampleTestQuestion?sampleTestId=${sampleTestId}`, { QuestionId: questionId }, { headers })
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
            enqueueSnackbar('Thêm câu hỏi thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
            queryClient.invalidateQueries({ queryKey: ['sample'] })
        },
        onError: (error) => {
            enqueueSnackbar('Lỗi khi thêm câu hỏi', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
        }
    })
    return { addQuestion: addQuestion.mutate, addQuestionPending: addQuestion.isPending }

}

export default usePostQuestionToSampleTest