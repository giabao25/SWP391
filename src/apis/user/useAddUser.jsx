import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

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
    const queryClient = useQueryClient()
    const addUser = useMutation({
        mutationFn: addUserData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['user'] })
        },
        onError: () => {
            console.log('cant not add')
        }
    })
    return { add: addUser.mutate, addPending: addUser.isPending }

}

export default useAddUser