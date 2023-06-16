import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {

    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://melody-lab-server.vercel.app/instructors')
            return res.json()
        }
    })

    return [instructors, loading, refetch];

};

export default useInstructors;