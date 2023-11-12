import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

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
    const queryClient = useQueryClient()
    const insertUser = useMutation({
        mutationFn: updateUserData,
        onSuccess: () => {
            console.log('success')
            queryClient.invalidateQueries({ queryKey: ['users'] })
        },
        onError: (error) => {
            console.log(error)
            console.log('cant not update')
        }
    })
    return { insert: insertUser.mutate, insertPending: insertUser.isPending }

}

export default usePostDataStudent