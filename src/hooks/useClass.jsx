import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-fawn.vercel.app/menu');
            return res.json();
        }
    })

    return [menu, loading, refetch]
};

export default useClass;