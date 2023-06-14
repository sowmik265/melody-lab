import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext);
    // const { user, loading } = useAuth();
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}


export default useCart;