import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

const updateUserURL = 'https://drivingapi.azurewebsites.net/api/Students/updateInfoStudent'

const updateUserData = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.put(updateUserURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostUserData = () => {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const updateUser = useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            enqueueSnackbar('Thay đổi được thực hiện', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: (error) => {
            enqueueSnackbar('Có lỗi xảy ra', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'top' } })
        }
    })
    return { update: updateUser.mutate, updatePending: updateUser.isPending }

}

export default usePostUserData