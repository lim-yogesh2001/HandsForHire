
import './payment.css';

export default function PaymentCard() {
    return (
        <div className='payment-card'>
            <p>Payment Method Name</p>
            <div className='payment-body'>
                <img className='payment-logo' src='https://dao578ztqooau.cloudfront.net/static/img/logo1.png' alt='payment-logo' />
                <p className='payment-add'>Add Payment</p>
            </div>
        </div>
    )
}