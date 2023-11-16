import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";


const deleteQuestion = async (data) => {
    console.log(data)
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return axios.delete(`https://drivingapi.azurewebsites.net/api/SampleTest/deleteSampleTestQuestion`, { data, headers })
}


const useDeleteQuestion = () => {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const deleteQuest = useMutation({
        mutationFn: deleteQuestion,
        onSuccess: () => {
            enqueueSnackbar('Xóa câu hỏi thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
            queryClient.invalidateQueries({ queryKey: ['sample'] });
        },
        onError: (error) => {
            enqueueSnackbar('Có lỗi khi xóa câu hỏi', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
        }
    });
    return { deleteQuest: deleteQuest.mutate, deleteQuestPending: deleteQuest.isPending }

}

export default useDeleteQuestion