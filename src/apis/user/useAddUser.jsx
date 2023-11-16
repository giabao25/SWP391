import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

const addUserURL = 'https://drivingapi.azurewebsites.net/api/Users/insertNewUser'

const addUserData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(addUserURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const useAddUser = () => {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const addUser = useMutation({
        mutationFn: addUserData,
        onSuccess: () => {
            enqueueSnackbar('Thêm mới thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: () => {
            enqueueSnackbar('Có lỗi khi thêm mới', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        }
    })
    return { add: addUser.mutate, addPending: addUser.isPending }

}

export default useAddUser