import React from 'react';
import useAuth from '../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hook/useAxios';

const PaymentHistory = () => {
    const {user} = useAuth();
    const axios = useAxios()

    const {data: payments =[]} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () =>{
            const res = await axios.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2>Total paymnets: {payments.length}</h2>

            <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>price</th>
        <th>Transection Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        payments.map((payment,idx) => 
            <tr key={payment._id}>
              <th>{idx+1}</th>
              <td>{payment.price}</td>
              <td>{payment.transectionId}</td>
              <td>{payment.status}</td>
            </tr>)
      }

  
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;