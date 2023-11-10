import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const deleteQuestion = async (data) => {
    console.log(data)
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return axios.delete(`https://drivingapi.azurewebsites.net/api/SampleTest/deleteSampleTestQuestion`, { data, headers })
}


const useDeleteQuestion = () => {
    const queryClient = useQueryClient()
    const deleteQuest = useMutation({
        mutationFn: deleteQuestion,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sample'] });
        },
        onError: (error) => {
            console.error('Error while deleting item:', error);
        }
    });
    return { deleteQuest: deleteQuest.mutate, deleteQuestPending: deleteQuest.isPending }

}

export default useDeleteQuestion