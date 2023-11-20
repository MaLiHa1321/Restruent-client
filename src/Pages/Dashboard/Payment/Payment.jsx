import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK) 
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"payment"} subHeading={"Please pay to eat"} />
            <div>
             <Elements stripe={stripePromise}>
                <CheckoutForm />
             </Elements>
            </div>
            
        </div>
    );
};

export default Payment;