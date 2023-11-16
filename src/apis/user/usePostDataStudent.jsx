import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

const insertUserURL = 'https://drivingapi.azurewebsites.net/api/Students/insertStudent'

const updateUserData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(insertUserURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostDataStudent = () => {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const insertUser = useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            enqueueSnackbar('Thêm tài khoản thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
        onError: (error) => {
            enqueueSnackbar('Tài khoản đã tồn tại', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
        }
    })
    return { insert: insertUser.mutate, insertPending: insertUser.isPending }

}

export default usePostDataStudent