import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hook/useAxios";
import useCart from "../../../hook/useCart";
import useAuth from "../../../hook/useAuth";


const CheckoutForm = () => {
    const [error,setError] = useState()
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    const axios = useAxios();
    const {user} = useAuth()
    const [cart] = useCart();
    const totalPrice = cart.reduce((total,item) => total + item.price, 0)

    useEffect(()=>{
     axios.post('/create-payment-intent', {price: totalPrice})
     .then(res =>{
       console.log(res.data.clientSecret)
       setClientSecret(res.data.clientSecret)
     })

    },[axios,totalPrice])
    const handleSubmit = async(e) =>{
        e.preventDefault();

        // if stripe and elements are not found then
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error)
            setError(error.message)
        } else{
            console.log('payment method', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent)
            if( paymentIntent.status === 'succeeded'){
                console.log('transection id',  paymentIntent.id)
                setTransectionId(paymentIntent.id)

                   // now save the payment in the database
                   const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transectionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuItemId: cart.map(item => item.menuItemId),
                    status: 'pending'
                   }

                 const res =await axios.post('/payments', payment)
                 console.log('payment saved',res)
            }

         

        }


    }
    return (
        <form onSubmit={handleSubmit}>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary m-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">
        {error}
</p>
{transectionId && <p className="text-green-600">Your transection id: {transectionId}</p>}

        </form>
    );
};

export default CheckoutForm;