import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";

const updatePassword = 'https://drivingapi.azurewebsites.net/api/Users/updatePassword'

const updatePass = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.put(updatePassword, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostPassword = () => {
    const { enqueueSnackbar } = useSnackbar()
    const updatePasswordd = useMutation({
        mutationFn: updatePass,
        onSuccess: () => {
            enqueueSnackbar('Mật khẩu đã được thay đổi', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        },
        onError: () => {
            enqueueSnackbar('Mật khẩu chưa được thay đổi', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
        }
    })
    return { update: updatePasswordd.mutate, updatePending: updatePasswordd.isPending }

}

export default usePostPassword