import React from 'react';
import useEnrolled from '../hooks/useEnrolled';
import SectionTile from '../Utilitites/SectionTile';

const Enrolled = () => {
    const [payment] = useEnrolled();

    const classes = payment.map(pay => pay.classItems)

    const items = classes[0]
    console.log(items)





    return (
        <div className="w-full">
            <SectionTile title={'My enrolled classes'}></SectionTile>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>

                                <td>
                                    {item.instructorName}
                                </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;