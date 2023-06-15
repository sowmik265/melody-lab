import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useEnrolled = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: payment = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [payment, refetch]
};

export default useEnrolled;