import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useSnackbar } from "notistack";

const newSampleTestURL = 'https://drivingapi.azurewebsites.net/api/SampleTest/insertSampleTest'

const postNewTestSample = async (data) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.post(newSampleTestURL, data, { headers })
        return response.data
    } catch (error) {
        throw error
    }
}

const usePostNewSampleTest = () => {
    const { enqueueSnackbar } = useSnackbar()
    const queryClient = useQueryClient()
    const postNewTest = useMutation({
        mutationFn: postNewTestSample,
        onSuccess: () => {
            enqueueSnackbar('Tạo bộ đề thành công', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            queryClient.invalidateQueries({ queryKey: ['samples'] })
        },
        onError: () => {
            enqueueSnackbar('Có lỗi khi tạo bộ đề', { variant: 'error', anchorOrigin: { horizontal: 'right', vertical: 'bottom' } })
            console.log('cant not add')
        }
    })
    return { postNewTest: postNewTest.mutate, postNewTestPending: postNewTest.isPending }

}

export default usePostNewSampleTest