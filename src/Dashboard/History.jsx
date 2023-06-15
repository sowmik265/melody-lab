import React from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTile from '../Utilitites/SectionTile';

const History = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payment = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data;
        },
    })
    console.log(payment)

    return (
        <>
        <SectionTile title={'my payment history'}></SectionTile>
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>AMOUNT</th>
                            <th>Transiction ID</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>{index + 1}</td>
                                <td>{item.price}</td>
                                <td>{item.transactionId}</td>
                                <td>{item.date}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default History;