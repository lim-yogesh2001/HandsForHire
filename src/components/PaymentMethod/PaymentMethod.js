
import PaymentCard from './PaymentCard/PaymentCard';
import './payment-method.css';

export default function PaymentMethod() {
    return (
        <div className='payment-container'>
            <div className='payment-header'>
                <p>My Payment Method</p>
            </div>
           <PaymentCard />
        </div>
    );
}