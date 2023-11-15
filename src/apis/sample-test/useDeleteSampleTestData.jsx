import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const deleteTestDataUser = async (sampleTestId) => {
    const userId = localStorage.getItem('userId');
    const id = encodeURIComponent(userId)
    const token = localStorage.getItem('token');
    const headers = {
        Authorization: `Bearer ${token}`
    };
    return axios.delete(`https://drivingapi.azurewebsites.net/api/StudentTest/deleteStudentTest?SampleTestId=${sampleTestId}&StudentId=${id}`, { headers })
}
const useDeleteSampleTestData = () => {
    const nav = useNavigate()
    const deleteData = useMutation({
        mutationFn: deleteTestDataUser,
        onSuccess: () => {
            // queryClient.invalidateQueries({ queryKey: ['sample'] });
            console.log('success')
            // nav('/sample-test1')
        },
        onError: (error) => {
            console.error('Error while deleting item:', error);
        }
    });
    return { deleteData: deleteData.mutate, deleteDataPending: deleteData.isPending }
}

export default useDeleteSampleTestData