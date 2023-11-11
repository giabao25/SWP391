import { useMutation } from "@tanstack/react-query";
import axios from "axios";

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
    const updatePasswordd = useMutation({
        mutationFn: updatePass,
        onSuccess: () => {
            console.log('success')
        },
        onError: () => {
            console.log('cant not update')
        }
    })
    return { update: updatePasswordd.mutate, updatePending: updatePasswordd.isPending }

}

export default usePostPassword