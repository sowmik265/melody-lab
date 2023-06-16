import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../hooks/useCart';

const SingleClass = ({ name }) => {
    const { className, classImage, instructorName, email, totalSeats, price, time, _id } = name;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();


    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = name => {
        console.log(name);

        if (user && user.email) {
            const cartItem = { classId: _id, className, classImage, instructorName, price, email: user.email }
            fetch('https://melody-lab-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added Sucessfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className=''>
            <div className="w-full md:w-72 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                <img className="h-40 object-cover rounded-xl mx-auto" src={classImage} alt="" />
                <div className="p-2">

                    <h2 className="font-bold text-lg mb-2 ">{className}</h2>

                    <p className="text-sm text-gray-600">Instructor : {instructorName}</p>
                    <p className="text-sm text-gray-600"> Email : {email}</p>
                    <div className='flex justify-around'>
                        <p className="text-sm text-gray-600"> Seats : {totalSeats}</p>
                        <p className="text-sm text-gray-600"> Price : {price}</p>
                    </div>
                    <p className="text-sm text-gray-600"> Schedule : {time}</p>
                </div>

                <div className="m-2">
                    {/* <Link to={`/order/${title}`}> */}
                    <button onClick={() => handleAddToCart(name)} className="btn btn-outline btn-warning border-b-4">Enroll Now</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default SingleClass;