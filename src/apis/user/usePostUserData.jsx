import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

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
    const queryClient = useQueryClient()
    const updateUser = useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: () => {
            console.log('cant not update')
        }
    })
    return { update: updateUser.mutate, updatePending: updateUser.isPending }

}

export default usePostUserData